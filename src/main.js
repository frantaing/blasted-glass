import './style.css'

// rn, typing animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".animate-typing");
  // store the original text and clear the elements
  const originalTexts = Array.from(elementsToAnimate).map(el => {
    const text = el.textContent;
    el.textContent = "";
    return text;
  });
  // FUNCTION: handle the typing animation for a single element
  const typeText = (element, text, typingSpeed = 10) => {
    return new Promise(resolve => {
      let i = 0;
      element.classList.add("typing-cursor"); // add cursor
      
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
          element.classList.remove("typing-cursor"); // remove cursor
          resolve(); // TELL: animation is finished
        }
      }, typingSpeed);
    });
  };
  // ASYNC FUNCTION: run animations in sequence
  const runAnimations = async () => {
    for (let i = 0; i < elementsToAnimate.length; i++) {
      // small delay before starting the next element's animation
      if (i > 0) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      await typeText(elementsToAnimate[i], originalTexts[i]);
    }
  };
  // start animations
  runAnimations();
});