const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#enviarcorreo');

$form.addEventListener('submit', handleSubmit());

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const mailtoLink = `mailto:josecitohernandez5@gmail.com?subject=${encodeURIComponent(
    'Asunto: ' + form.get('asunto')
  )}&body=${encodeURIComponent(
    'Nombre: ' + form.get('name') +
    '\nCorreo: ' + form.get('email') +
    '\nCelular: ' + form.get('telefono') +
    '\nMensaje: ' + form.get('message')
  )}`;
  $buttonMailto.setAttribute('href', mailtoLink);
  $buttonMailto.click();
}
