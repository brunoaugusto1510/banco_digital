const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o recarregamento da página [cite: 106]

    if (usuario.value === "" || senha.value === "") { // [cite: 107]
        mensagem.textContent = "Preencha todos os campos!"; // [cite: 108]
    } else if (usuario.value === "adm" && senha.value === "123") { // [cite: 108]
        mensagem.style.color = "#03dac6"; // [cite: 109]
        mensagem.textContent = "Login realizado com sucesso!"; // [cite: 110]
    } else {
        mensagem.textContent = "Usuário ou senha incorretos."; // [cite: 113]
    }
});