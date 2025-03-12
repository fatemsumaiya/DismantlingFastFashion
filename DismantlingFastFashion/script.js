let buttonName = document.getElementById('toggleButton');
let heading2 = document.querySelectorAll('h1');
let paragraphs = document.querySelectorAll('p');
let bulletinPoints = document.querySelectorAll('.bullet');

let myFunction = () => {
  document.body.classList.toggle("light-mode-action"); // Toggle class on the document body
}

buttonName.addEventListener('click', myFunction);

let signUpButton = document.querySelector('.forms button');
let firstNameInput = document.getElementById('fname');
let lastNameInput = document.getElementById('lname');

// Function to validate the inputs
let validateInputs = () => {
  let firstName = firstNameInput.value.trim();
  let lastName = lastNameInput.value.trim();

  // Check if the first name is empty
  if (firstName === '') {
    alert('Please enter your first name.');
    return false; // Prevent the form from submitting
  }

  // Check if the last name is empty
  if (lastName === '') {
    alert('Please enter your last name.');
    return false; // Prevent the form from submitting
  }

  return true; // Allow the form to submit
};

// Function to handle sign-up form submission
let signUp = () => {
  if (validateInputs()) {
    // Code to add the signature to the list (not shown in the provided HTML)
    alert('Thank you for signing up!');
  }
};

// Add event listener to the sign-up button
signUpButton.addEventListener('click', signUp);