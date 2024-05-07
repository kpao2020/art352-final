const c1 = document.getElementById('about');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');
const b3 = document.getElementById('btn3');

const bioOpenBtn = document.getElementById('bio-open-btn');
const bioCloseBtn = document.getElementById('bio-close-btn');
const bioText = document.getElementById('bio-text');

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
    c1.classList.toggle("d-none");
});

bioOpenBtn.addEventListener("click", () => {
    bioText.classList.toggle("d-none");
    bioOpenBtn.classList.toggle("d-none");
    bioCloseBtn.classList.toggle("d-none");
});

bioCloseBtn.addEventListener("click", () => {
    bioText.classList.toggle("d-none");
    bioOpenBtn.classList.toggle("d-none");
    bioCloseBtn.classList.toggle("d-none");
});

// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         } 
//         else {
//           alert("Thank you for submitting your contact information successfully.");
//           if (form.classList.contains('was-validated')){
//             form.preventDefault();
//     const data = new FormData(form);
//     const action = form.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//     .then(() => {
//       alert("Success!");
//     })
//           }
          
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()

// function sendGoogle(e){
//   e.preventDefault();
//   const cform = document.getElementById('contact-form');
//   const data = new FormData(cform);
//   const action = e.target.action;
//   fetch(action, {
//       method: 'POST',
//       body: data,
//     }).then(() => {
//       alert("Success!");
//     })
//   return false;
// }

window.addEventListener("load", function() {
  const cform = document.getElementById('contact-form');
  cform.addEventListener("click", function(e) {
    e.preventDefault();
    const data = new FormData(cform);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    });
    return false;
  });
});