import './style.css'

// rn, typing animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".type-me");
  const animationQueue = [];

  // 1. FIND: text nodes for animation
  elementsToAnimate.forEach(element => {
    // last text node that isn't just whitespace
    const textNode = Array.from(element.childNodes).find(node => 
        node.nodeType === 3 && node.textContent.trim().length > 0
    );

    if (textNode) {
      const text = textNode.textContent.trim();
      textNode.textContent = ""; // clear ONLY text nodes
      animationQueue.push({
        element: element, // parent for adding the cursor
        node: textNode,   // text node to type into
        text: text,
      });
    }
  });

  // 2. FUNCTION: handle typing for one item in queue
  const typeText = (item, options = {}) => {
    const { typingSpeed = 10, keepCursor = false, preTypingDelay = 0 } = options; // typing speed here!
    return new Promise(resolve => {
      // add cursor immediately so it blinks during the delay
      item.element.classList.add("typing-cursor");

      // create a delay before typing starts
      setTimeout(() => {
        const typingInterval = setInterval(() => {
          if (i < item.text.length) {
            item.node.textContent += item.text.charAt(i);
            i++;
          } else {
            clearInterval(typingInterval);
            if (!keepCursor) {
              item.element.classList.remove("typing-cursor");
            }
            resolve();
          }
        }, typingSpeed);
      }, preTypingDelay); // delay value
      let i = 0;
    });
  };
  // 3. ASYNCH FUNCTION: run animations in sequence
  const runAnimations = async () => {
    const initialBlinkDelay = 1700; // set delay here (miliseconds)

    for (let i = 0; i < animationQueue.length; i++) {
      if (i > 0) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      const isFirstElement = i === 0;
      const isLastElement = i === animationQueue.length - 1;

      // pass initial delay only for the first element
      const options = {
        keepCursor: isLastElement,
        preTypingDelay: isFirstElement ? initialBlinkDelay : 0
      };

      await typeText(animationQueue[i], options);
    }
  };
  runAnimations(); // start animation
});