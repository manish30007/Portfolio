const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -6% 0px",
  },
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${index * 60}ms`;
  observer.observe(element);
});
