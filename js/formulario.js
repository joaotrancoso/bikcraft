const formulario = document.querySelector('form');

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disable = true;
  botao.innerText = 'Enviando...'


}

formulario.addEventListener('submit', enviarFormulario);