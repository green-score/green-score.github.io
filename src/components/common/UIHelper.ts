export const respondToVisibility = (element: Element | null, callback: (visible: boolean) => void) => element && (
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      callback(entry.intersectionRatio > 0);
    });
  }, { root: document.documentElement }).observe(element)
);
