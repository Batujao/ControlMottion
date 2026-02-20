// =============================
// SMOOTH SCROLL (com offset navbar)
// =============================
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const navHeight = document.querySelector("nav").offsetHeight;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });

    // fecha menu mobile
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("hamburger").classList.remove("active");
  });
});

// =============================
// MENU HAMBURGER
// =============================
document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("mobileMenu").classList.toggle("active");
});

// =============================
// ANO AUTOMÁTICO FOOTER
// =============================
document.getElementById("year").textContent = new Date().getFullYear();

// =============================
// MODAL
// =============================
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");
const form = document.getElementById("contact-form");

// abrir modal
openBtn.onclick = () => {
  modal.classList.add("show");
};

// função única para fechar modal
function closeModal() {
  modal.classList.remove("show");
  form.reset();
}

// botão fechar
closeBtn.onclick = closeModal;

// clicar fora
window.onclick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};

// =============================
// TOAST (notificação bonita)
// =============================
const toast = document.getElementById("toast");

function showToast() {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// =============================
// ENVIO DE EMAIL
// =============================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      showToast(); // mostra mensagem bonita
      closeModal(); // fecha modal + limpa form
    } else {
      showToast();
      console.error("Erro ao enviar");
    }
  } catch (error) {
    console.error(error);
    showToast();
  }
});
