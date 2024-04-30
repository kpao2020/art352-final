const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');
const b3 = document.getElementById('btn3');
const b4 = document.getElementById('btn4');
const e1 = document.getElementById('e1');
const e2 = document.getElementById('e2');
const e3 = document.getElementById('e3');
const e4 = document.getElementById('e4');
const eb1 = document.getElementById('ebtn1');
const eb2 = document.getElementById('ebtn2');
const eb3 = document.getElementById('ebtn3');
const eb4 = document.getElementById('ebtn4');

b1.addEventListener("click", () => {
    c1.classList.toggle("d-none");
    c2.classList.toggle("d-none");
});

b2.addEventListener("click", () => {
    c2.classList.toggle("d-none");
    c3.classList.toggle("d-none");
});

b3.addEventListener("click", () => {
    c3.classList.toggle("d-none");
    c4.classList.toggle("d-none");
});

b4.addEventListener("click", () => {
  c4.classList.toggle("d-none");
  c1.classList.toggle("d-none");
});

eb1.addEventListener("click", () => {
  e1.classList.toggle("d-none");
  e2.classList.toggle("d-none");
});

eb2.addEventListener("click", () => {
  e2.classList.toggle("d-none");
  e3.classList.toggle("d-none");
});

eb3.addEventListener("click", () => {
  e3.classList.toggle("d-none");
  e4.classList.toggle("d-none");
});

eb4.addEventListener("click", () => {
  e4.classList.toggle("d-none");
  e1.classList.toggle("d-none");
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
        else {
          alert('Thank you for submitting your contact information successfully.');
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()