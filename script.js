// Smooth scroll com offset da navbar fixa
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var href = this.getAttribute("href");
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    var navHeight = document.querySelector("nav").offsetHeight;
    var top =
      target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: top, behavior: "smooth" });
  });
});

// Ano atual no footer
document.getElementById("year").textContent = new Date().getFullYear();
