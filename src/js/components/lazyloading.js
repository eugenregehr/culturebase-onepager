const LazyLoading = () => {
  let lazyloadImages = document.querySelectorAll(".lazy");
  if ("IntersectionObserver" in window) {
    let imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  }
}

export default LazyLoading;