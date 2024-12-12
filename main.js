// Função para scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para animação de scroll (exemplo de animação quando o usuário desce na página)
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    if (window.scrollY > 100) {
        hero.classList.add('scrolled');
    } else {
        hero.classList.remove('scrolled');
    }
});

// Seção de contato - feedback ao clicar no link do WhatsApp
const contatoButton = document.querySelector('.cta-button');
if (contatoButton) {
    contatoButton.addEventListener('click', () => {
        alert("Você será redirecionado para o WhatsApp!");
    });
}

// Exemplo de validação simples de formulário (caso queira adicionar um formulário de contato futuramente)
function validateForm() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    if (nome.value === "" || email.value === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

// Aqui, você poderia adicionar um evento de "submit" para um formulário de contato quando for criado.
// Exemplo:
// document.getElementById("formContato").addEventListener("submit", validateForm);
