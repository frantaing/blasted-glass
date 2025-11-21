// src/lib/actions/typewriter.ts
// The typewriter animation

const queue: TypewriterActionItem[] = [];
let isRunning = false;
let lastElement: HTMLElement | null = null;
let isFirstRunOnPageLoad = true;
let activeInstances = 0; // Track how many elements are using the action

const initialBlinkDelay = 1700;
const delayBetweenElements = 200;
const typingSpeed = 10;

interface TypewriterActionItem {
	element: HTMLElement;
	text: string;
}

async function processQueue() {
	if (isRunning || queue.length === 0) return;
	isRunning = true;

	const item = queue.shift();
	if (!item) return;

	item.element.classList.add('typing-cursor');
	lastElement = item.element;

	// --- FIX: Check our reliable flag instead of the queue length ---
	if (isFirstRunOnPageLoad) {
		await new Promise(resolve => setTimeout(resolve, initialBlinkDelay));
		// --- FIX: Immediately set the flag to false so this never runs again ---
		isFirstRunOnPageLoad = false;
	}

	await new Promise<void>(resolve => {
		let i = 0;
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

	if (queue.length > 0) {
		item.element.classList.remove('typing-cursor');
		await new Promise(resolve => setTimeout(resolve, delayBetweenElements));
		isRunning = false;
		processQueue();
	} else {
		isRunning = false;
	}
}

export function typewriter(element: HTMLElement, text: string) {
    activeInstances++; // Increment for each element using the action

	const textNode = Array.from(element.childNodes).find(
		node => node.nodeType === 3 && node.textContent?.trim()
	);
	if (textNode) {
		textNode.textContent = '';
	} else {
		element.textContent = '';
	}

	queue.push({ element, text });

	processQueue();

	return {
		destroy() {
			activeInstances--; // Decrement when an element is unmounted
			// --- FIX: If all elements are gone, reset the state for the next page load/navigation ---
			if (activeInstances === 0) {
				queue.length = 0;
				isRunning = false;
				isFirstRunOnPageLoad = true; // This is crucial for SPA navigation
                lastElement = null;
			}
		}
	};
}