// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the form
var form = document.getElementById("myForm");

// When the user submits the form, add the input to the list
form.onsubmit = function(event) {
  event.preventDefault();
  var input = document.getElementById("myInput").value;
  if (input.trim() !== "") {
    var li = document.createElement("li");
    var text = document.createTextNode(input);
    li.appendChild(text);
    document.getElementById("myList").appendChild(li);
    document.getElementById("myInput").value = "";
  }
}

// Get the button that toggles the theme
var themeBtn = document.getElementById("themeBtn");

// When the user clicks on the button, toggle the theme
themeBtn.onclick = function() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-theme");
}

// Form submission
var contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Perform form validation here
  if (!name || !email || !message) {
    displayErrorMessage('All fields are required.');
    return;
  }

  // Perform form submission here
  submitForm(name, email, message);
}

function submitForm(name, email, message) {
  // Perform form submission, e.g., send data to server via AJAX

  // Reset form after successful submission
  contactForm.reset();

  // Display success message
  displaySuccessMessage('Form submitted successfully!');
}

function displayErrorMessage(message) {
  var errorElement = document.createElement('p');
  errorElement.classList.add('error');
  errorElement.textContent = message;

  var formSection = document.querySelector('section');
  formSection.appendChild(errorElement);
}

function displaySuccessMessage(message) {
  var successElement = document.createElement('p');
  successElement.textContent = message;

  var formSection = document.querySelector('section');
  formSection.appendChild(successElement);
}
