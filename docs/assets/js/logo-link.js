document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("header a.md-logo");
  const home = document.querySelector(".md-nav__title a[href]");

  if (logo && home) {
    logo.href = home.href;
    logo.removeAttribute("target");
    logo.removeAttribute("rel");
  }
});