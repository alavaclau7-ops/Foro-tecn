// Demostración académica: este formulario valida, pero no envía ni guarda datos.
const formulario = document.querySelector('#contact-form');
const estado = document.querySelector('#resultado');

if (formulario && estado) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!formulario.checkValidity()) {
      estado.textContent = 'Revisa los campos obligatorios y el formato del correo. No se ha enviado ningún dato.';
      estado.classList.remove('ok');
      formulario.reportValidity();
      return;
    }
    estado.textContent = 'Formulario validado correctamente. Es una demostración: no se envió ni guardó información.';
    estado.classList.add('ok');
  });
}