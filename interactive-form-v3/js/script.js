//Variables for name, email, card number, zipcode, cvv, and the form field 
const nameField = document.getElementById('name');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const forms = document.getElementsByTagName('form');
const form = forms[0]
// Selecting and adding focus to name field
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

// Focus and blur event for tabbing through checkboxes on the form
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

for(let i = 0; i < checkboxes.length; i++) {

    const cbLabel = checkboxes[i].parentNode;
  
   checkboxes[i].addEventListener('focus',(e) => {
       cbLabel.classList.add('focus');
    });
    checkboxes[i].addEventListener('blur',(e) => {
        cbLabel.classList.remove('focus');  
    });
}

//Variables to reference the "Register for Activities" section
const register = document.getElementById('activities');
const total = document.getElementById('activities-cost');
let registered = 0;
let totalCost = 0;
//Event listener for activities selected and cost update to the DOM
register.addEventListener('change',(e) => {
   let cost = e.target.getAttribute("data-cost");
       cost = parseInt(cost);
       if(e.target.checked === true) {
         totalCost += cost
         registered += 1
         total.innerHTML = `<p>Total: $${totalCost}</p>`
       }
       if(e.target.checked === false) {
         totalCost -= cost
         registered -= 1
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
 //Functions to add and remove classes to form fields
function addNotValid(name) {
  return   name.parentNode.classList.add("not-valid")
};
function removeValid(name) {
  return name.parentNode.classList.remove("valid")
};
function addValid(name) {
  return name.parentNode.classList.add("valid")
};
function removeNotValid(name) {
  return name.parentNode.classList.remove("not-valid")
};

//Event listener for form field validations and warn user on fields not validated
 form.addEventListener('submit',(e) => {

    const nameValue = nameField.value
    const nameRegex = /^\w{3,}$/.test(nameValue)
    const emailValue = email.value
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    const cardNumVal = cardNumber.value
    const cardRegex = /^\d{13,16}$/.test(cardNumVal);
    const zipVal = zipcode.value
    const zipRegex = /^[0-9]{5}$/.test(zipVal);
    const cvvVal = cvv.value
    const cvvRegex = /^[0-9]{3}$/.test(cvvVal);
    const cardCheck = cardRegex && zipRegex && cvvRegex
    
    // Validates name field is filled out with more than 3 characters
    if(nameRegex === false) {
      e.preventDefault();
      addNotValid(nameField);
      removeValid(nameField);
      nameField.parentNode.lastElementChild.style.display = 'block';
    } else {
        addValid(nameField);
        removeNotValid(nameField);
        nameField.parentNode.lastElementChild.style.display = 'none'; 
    }
   
    // Validates email field is filled out with valid email
    if(emailRegex === false) {
      e.preventDefault();
      addNotValid(email);
      removeValid(email);
      email.parentNode.lastElementChild.style.display = 'block';
    } else {
       addValid(email);
       removeNotValid(email);
       email.parentNode.lastElementChild.style.display = 'none'; 
    }
   
    // Validates registered field is checked with at least one activity
    if(registered === 0) {
      e.preventDefault();
      register.classList.add("not-valid")
      register.classList.remove("valid")
      register.lastElementChild.style.display = 'block' 
    } else {
        register.classList.add("valid")
        register.classList.remove("not-valid")
        register.lastElementChild.style.display = 'none'  
    }
    // If credit card field is not hidden, validates CC# is between 13- 16 digits,zip of 5 digitsand cvv of 3 digits
    if(creditCard.hasAttribute('hidden') === false) {
      if(cardCheck === false) {
        e.preventDefault();
        if(cardRegex === false) {
          addNotValid(cardNumber);
          removeValid(cardNumber);
          cardNumber.parentNode.lastElementChild.style.display = 'block';
        } else {
          addValid(cardNumber);
          removeNotValid(cardNumber);
          cardNumber.parentNode.lastElementChild.style.display = 'none';
        }
        if(zipRegex === false) {
          addNotValid(zipcode);
          removeValid(zipcode);
          zipcode.parentNode.lastElementChild.style.display = 'block';
        } else {
          addValid(zipcode);
          removeNotValid(zipcode);
          zipcode.parentNode.lastElementChild.style.display = 'none';
        }
        if(cvvRegex === false) {
          addNotValid(cvv);
          removeValid(cvv);
          cvv.parentNode.lastElementChild.style.display = 'block';
        } else {
          addValid(cvv);
          removeNotValid(cvv);
          cvv.parentNode.lastElementChild.style.display = 'none';
        } 
      } else {
        addValid(cardNumber);
        removeNotValid(cardNumber);
        addValid(zipcode);
        removeNotValid(zipcode);
        addValid(cvv);
        removeNotValid(cvv);
        cardNumber.parentNode.lastElementChild.style.display = 'none';
        zipcode.parentNode.lastElementChild.style.display = 'none';
        cvv.parentNode.lastElementChild.style.display = 'none';
      }
    }
 });
