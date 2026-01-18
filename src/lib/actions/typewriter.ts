// typewriter animation!

// --- State Management ---
interface TypewriterActionItem {
  element: HTMLElement;
  text: string;
}

interface ElementTextMap {
  element: HTMLElement;
  text: string;
}

const queue: TypewriterActionItem[] = [];
const activeElements: HTMLElement[] = []; // Track everything to untype it later 
const elementTextMap: ElementTextMap[] = []; // Store original text for each element

let isRunning = false;
let isFirstRunOnPageLoad = true;
let delayNextPage = false;
let pageStartDelay = 0;

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
	
  // Page-level delay (for re-centering after navigation)
  if (delayNextPage && pageStartDelay > 0) {
    await new Promise(resolve => setTimeout(resolve, pageStartDelay));
    delayNextPage = false;
    pageStartDelay = 0;
  }
	
  // Initial delay
  if (isFirstRunOnPageLoad) {
    await new Promise(resolve => setTimeout(resolve, initialBlinkDelay));
    isFirstRunOnPageLoad = false;
  }
	
  // Typing loop
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
	
  // Cleanup & next item
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

// --- Set the delay ---
export function setPageStartDelay(delay: number) {
  delayNextPage = true;
  pageStartDelay = delay;
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
		
    // After untyping, set delay for next page
    setPageStartDelay(150); // Delay before typing new page
		
    resolve();
  });
}

// --- Measure Content ---
export function measureContent(container: HTMLElement): number {
  // Clone the container
  const clone = container.cloneNode(true) as HTMLElement;
	
  // Make invisible but take up space
  clone.style.position = 'absolute';
  clone.style.visibility = 'hidden';
  clone.style.height = 'auto';
  clone.style.pointerEvents = 'none';
	
  // Find all elements that have typewriter text
  const cloneElements = clone.querySelectorAll('*');
  cloneElements.forEach(el => {
    const htmlEl = el as HTMLElement;
    const originalText = htmlEl.getAttribute('data-typewriter-text');
    if (originalText) {
      htmlEl.textContent = originalText;
    }
  });
	
  // Add to DOM temporarily
  document.body.appendChild(clone);
  // Measure
  const height = clone.offsetHeight;
  // Remove
  document.body.removeChild(clone);
	
  return height;
}

// --- Action ---
export function typewriter(element: HTMLElement, text: string) {
  // Store full text as data attribute for measurement
  element.setAttribute('data-typewriter-text', text);
	
  // Clear any existing text nodes
  const textNode = Array.from(element.childNodes).find(
    node => node.nodeType === 3 && node.textContent?.trim()
  );
  if (textNode) textNode.textContent = '';
  else element.textContent = '';
	
  // Add to active list (for untyping later)
  activeElements.push(element);
  elementTextMap.push({ element, text });
	
  // Add to queue (for typing now)
  queue.push({ element, text });
	
  // Start typing
  processQueue();
	
  return {
    destroy() {
      // Remove from active list when element is removed from DOM
      const index = activeElements.indexOf(element);
      if (index > -1) activeElements.splice(index, 1);
			
      // Remove from text map
      const mapIndex = elementTextMap.findIndex(item => item.element === element);
      if (mapIndex > -1) elementTextMap.splice(mapIndex, 1);
			
      // Reset queue and running state if page is empty
      if (activeElements.length === 0) {
        queue.length = 0;
        isRunning = false;
      }
    }
  };
}