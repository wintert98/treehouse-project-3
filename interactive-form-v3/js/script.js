// Selecting and adding focus to name field
const nameField = document.getElementById('name');
nameField.focus();
// Variables to reference the "Job Role" and "Other job role" 
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
// Hiding Other job role field by default
otherJobRole.style.display = 'none'
// Makes other job visible/hidden when selecting/unselecting other
jobRole.addEventListener('change',(e) => {
  if(e.target.value === 'other') {
    otherJobRole.style.display = 'block';
  } else {
    otherJobRole.style.display = 'none';
  }
});
// Variables to reference the T-shirt "Design" and "Color" <select> elements
const design = document.getElementById('design');
const color = document.getElementById('color');
color.disabled = true;
//Event listener and loop to detect design choice and show available options for user selected design
design.addEventListener('change',(e) => {
    color.disabled = false;
    for(let i = 0; i < color.children.length ; i++) {
      const designValue = e.target.value;
      const colorOption = color.children[i].getAttribute("data-theme");
     if(designValue === colorOption) {
       color.children[i].removeAttribute('hidden')
     } else {
        color.children[i].setAttribute('hidden', 'hidden') 
     } 
    }
});

//Variables to reference the "Register for Activities" section
const register = document.getElementById('activities');
const total = document.getElementById('activities-cost');
let totalCost = 0;
//Event listener for activities selected and cost update to the DOM
register.addEventListener('change',(e) => {
   let cost = e.target.getAttribute("data-cost");
       cost = parseInt(cost);
       if(e.target.checked === true) {
         totalCost += cost
         total.innerHTML = `<p>Total: $${totalCost}</p>`
       }
       if(e.target.checked === false) {
         totalCost -= cost
         total.innerHTML = `<p>Total: $${totalCost}</p>`
       }
   
});

//Variables to reference the "Payment Info" section
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
payPal.setAttribute('hidden', 'hidden')
bitCoin.setAttribute('hidden', 'hidden')
//Event listener for payment selection and hide unselected options
payment.addEventListener('change',(e) => {
    
  if(e.target.value === 'credit-card') {
    creditCard.removeAttribute('hidden')
    payPal.setAttribute('hidden', 'hidden')
    bitCoin.setAttribute('hidden', 'hidden')
  }
  if(e.target.value === 'paypal') {
    creditCard.setAttribute('hidden', 'hidden')
    payPal.removeAttribute('hidden')
    bitCoin.setAttribute('hidden', 'hidden') 
}
  if(e.target.value === 'bitcoin') {
    creditCard.setAttribute('hidden', 'hidden')
    payPal.setAttribute('hidden', 'hidden')
    bitCoin.removeAttribute('hidden')
}
    
 });