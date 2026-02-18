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

    // Fechar menu mobile ao clicar
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("hamburger").classList.remove("active");
  });
});

// Hamburger menu
document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("mobileMenu").classList.toggle("active");
});

// Ano atual no footer
document.getElementById("year").textContent = new Date().getFullYear();
