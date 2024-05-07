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
// const cform = document.getElementById('contact-form');

// function sendGoogle(e){
//   e.preventDefault();
  
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
  cform.addEventListener("submit", function(e) {
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