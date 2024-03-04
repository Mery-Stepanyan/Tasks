const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
  let isValid = true; // Flag for validation

  
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name cannot be empty.';
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none'; 
  }

  
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Invalid email format.';
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none'; 
  }

  
  if (!isValid) {
    event.preventDefault();
  }
});
