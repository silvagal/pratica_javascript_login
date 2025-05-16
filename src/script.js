const form = document.getElementById('formularioEmail');
const emailInput = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexEmail.test(email)) {
    mensagem.textContent = 'E-mail válido!';
    mensagem.className = 'mensagem sucesso';
  } else {
    mensagem.textContent = 'E-mail inválido. Use o formato: nome@dominio.com';
    mensagem.className = 'mensagem erro';
  }
});
