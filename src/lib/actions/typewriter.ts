// typewriter.ts
// src/lib/actions/typewriter.ts

// --- State Management ---
interface TypewriterActionItem {
	element: HTMLElement;
	text: string;
}

const queue: TypewriterActionItem[] = [];
const activeElements: HTMLElement[] = []; // Track everything to untype it later 

let isRunning = false;
let isFirstRunOnPageLoad = true;

// --- Config ---
const initialBlinkDelay = 1700;
const delayBetweenElements = 200;
const typingSpeed = 7; // ms
const untypeSpeed = 5;

// --- Typing Logic ---
async function processQueue() {
	if (isRunning || queue.length === 0) return;
	isRunning = true;
	
	const item = queue.shift();
	if (!item) {
		isRunning = false;
		return;
	}
	
	item.element.classList.add('typing-cursor');
	
	// Initial Delay Logic
	if (isFirstRunOnPageLoad) {
		await new Promise(resolve => setTimeout(resolve, initialBlinkDelay));
		isFirstRunOnPageLoad = false;
	}
	
	// Typing Loop
	await new Promise<void>(resolve => {
		let i = 0;
		// Clear text before starting to type
		item.element.textContent = ""; 
		const interval = setInterval(() => {
			if (i < item.text.length) {
				item.element.textContent += item.text.charAt(i);
				i++;
			} else {
				clearInterval(interval);
				resolve();
			}
		}, typingSpeed);
	});
	
	// Cleanup & Next Item
	if (queue.length > 0) {
		item.element.classList.remove('typing-cursor');
		await new Promise(resolve => setTimeout(resolve, delayBetweenElements));
		isRunning = false;
		processQueue();
	} else {
		// Keep cursor on the last element
		isRunning = false;
	}
}

// --- Untyping Logic ---
export function untypeAll() {
	// Stop any forward typing immediately
	queue.length = 0;
	isRunning = false;
	
	return new Promise<void>(async (resolve) => {
		// Reverse the array so text is deleted from the bottom -> top
		const elementsReversed = [...activeElements].reverse();
		
		for (const element of elementsReversed) {
			// Skip elements that are already empty
			if (!element.textContent) continue;
			
			element.classList.add('typing-cursor');
			
			await new Promise<void>(done => {
				const interval = setInterval(() => {
					if (element.textContent && element.textContent.length > 0) {
						// Remove one character
						element.textContent = element.textContent.slice(0, -1);
					} else {
						clearInterval(interval);
						element.classList.remove('typing-cursor');
						done();
					}
				}, untypeSpeed);
			});
		}
		
		resolve();
	});
}

// --- Action ---
export function typewriter(element: HTMLElement, text: string) {
	// Check if this element is inside a measurement container
	const isInMeasureContainer = element.closest('[data-no-typewriter="true"]');
	
	if (isInMeasureContainer) {
		// Don't animate, just set the text immediately
		element.textContent = text;
		return {
			destroy() {}
		};
	}
	
	// Normal typewriter behavior for visible elements
	const textNode = Array.from(element.childNodes).find(
		node => node.nodeType === 3 && node.textContent?.trim()
	);
	if (textNode) textNode.textContent = '';
	else element.textContent = '';
	
	// Add to active list (for untyping later)
	activeElements.push(element);
	
	// Add to queue (for typing now)
	queue.push({ element, text });
	
	// Start typing
	processQueue();
	
	return {
		destroy() {
			// Remove from active list when element is removed from DOM
			const index = activeElements.indexOf(element);
			if (index > -1) activeElements.splice(index, 1);
			
			// Reset queue and running state if page is empty
			if (activeElements.length === 0) {
				queue.length = 0;
				isRunning = false;
			}
		}
	};
}