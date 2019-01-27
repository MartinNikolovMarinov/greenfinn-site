function easeInOutQuad(t, b, c, d) {
  t = t / d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return (-c) / 2 * (t * (t - 2) - 1) + b;
};

/**
 * @description Smoothly manipulates the element's left scroll position.
 * @param {HTMLElement} element
 * @param {Number} change
 * @param {Number} duration
 */
export function horizontalScroll(element, change, duration) {
  const start = element.scrollLeft;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if(currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}
