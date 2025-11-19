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
    const { typingSpeed = 10, keepCursor = false } = options; // typing speed here!

    return new Promise(resolve => {
      let i = 0;
      // add cursor to parent element
      item.element.classList.add("typing-cursor");

      const typingInterval = setInterval(() => {
        if (i < item.text.length) {
          // append character to the specific text node
          item.node.textContent += item.text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
          // if not the last element, remove the cursor
          if (!keepCursor) {
            item.element.classList.remove("typing-cursor");
          }
          resolve(); // animation is done!
        }
      }, typingSpeed);
    });
  };
  // 3. ASYNCH FUNCTION: run animations in sequence
  const runAnimations = async () => {
    for (let i = 0; i < animationQueue.length; i++) {
      // small delay before starting the next line
      if (i > 0) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      const isLastElement = i === animationQueue.length - 1;
      await typeText(animationQueue[i], { keepCursor: isLastElement });
    }
  };
  // delay
  setTimeout(() => {
    runAnimations(); // start animation
  }, 500);
});