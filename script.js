const initPortfolio = () => {
  // Modern Scroll Reveal Logic using Intersection Observer
  // This is more performant than listening to the 'scroll' event
  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Stop observing once the element is revealed
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null, // use the viewport
    threshold: 0.15, // trigger when 15% of the element is visible
  });

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => revealObserver.observe(el));

  // OFFLINE FAILSAFE: If the observer fails or takes too long due to
  // hanging remote resources, reveal all elements after 1.5 seconds.
  setTimeout(() => {
    revealElements.forEach((el) => {
      if (!el.classList.contains("active")) el.classList.add("active");
    });
  }, 1500);

  // Mobile Menu Interaction with Null Checks
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  console.log(
    "%c Soty.Dev Portfolio Loaded ",
    "background: #6366f1; color: #fff; padding: 5px; border-radius: 5px;",
  );
};

// Use 'DOMContentLoaded' for structure, but don't wait for images/fonts
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolio);
} else {
  initPortfolio();
}
