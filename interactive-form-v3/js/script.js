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

//
const register = document.getElementById('activities');
const total = document.getElementById('activities-cost');
let totalCost = 0;
register.addEventListener('change',(e) => {
   
});