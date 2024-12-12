document.addEventListener("DOMContentLoaded", () => {
  // Delegação de evento para links com href iniciando com "#"
  document.body.addEventListener("click", handleAnchorClick);

  // Função para animação de scroll (exemplo de animação quando o usuário desce na página)
  window.addEventListener("scroll", handleScrollAnimation);

  // Seção de contato - feedback ao clicar no link do WhatsApp
  const contatoButton = document.querySelector(".cta-button");
  if (contatoButton) {
    contatoButton.addEventListener("click", showWhatsAppAlert);
  }

  // Exemplo de validação simples de formulário
  const formContato = document.getElementById("formContato");
  if (formContato) {
    formContato.addEventListener("submit", validateForm);
  }

  // Menu Hamburguer - Adicionando evento de clique
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("header nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});

// Função para scroll suave em links com href iniciando com "#"
function handleAnchorClick(e) {
  if (e.target && e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetElement = document.querySelector(e.target.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}

// Função para animação do hero ao rolar a página
function handleScrollAnimation() {
  const hero = document.getElementById("hero");
  if (window.scrollY > 100) {
    hero.classList.add("scrolled");
  } else {
    hero.classList.remove("scrolled");
  }
}

// Função para feedback ao clicar no botão de contato (WhatsApp)
function showWhatsAppAlert() {
  alert("Você será redirecionado para o WhatsApp!");
}

// Função de validação de formulário (nome e email)
function validateForm(e) {
  e.preventDefault(); // Evita o envio do formulário enquanto valida

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  let valid = true;

  // Validação do nome
  if (!nome.value.trim()) {
    alert("Por favor, preencha seu nome.");
    valid = false;
  }

  // Validação do email
  if (!email.value.trim()) {
    alert("Por favor, preencha seu e-mail.");
    valid = false;
  }

  // Se tudo estiver correto, pode enviar o formulário
  if (valid) {
    alert("Formulário enviado com sucesso!");
    // enviar o formulário ou fazer outras ações
  }
}
