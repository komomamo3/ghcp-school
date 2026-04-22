(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    const delay = Number(el.dataset.delay || 0);
    if (!Number.isNaN(delay) && delay > 0) {
      el.style.setProperty("--delay", `${delay}s`);
    }
    observer.observe(el);
  });

  const driftItems = document.querySelectorAll(".drift");
  if (driftItems.length > 0) {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        driftItems.forEach((item) => {
          const ratio = Number(item.dataset.drift || 12);
          const offset = (y / ratio) * -1;
          item.style.transform = "translateY(" + offset + "px)";
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
