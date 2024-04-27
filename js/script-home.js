const beOpenBtn = document.getElementById('be-open-btn');
const beCloseBtn = document.getElementById('be-close-btn');
const beText = document.getElementById('be-text');

beOpenBtn.addEventListener("click", () => {
  beText.classList.toggle("d-none");
  beOpenBtn.classList.toggle("d-none");
  beCloseBtn.classList.toggle("d-none");
});

beCloseBtn.addEventListener("click", () => {
  beText.classList.toggle("d-none");
  beOpenBtn.classList.toggle("d-none");
  beCloseBtn.classList.toggle("d-none");
});

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()