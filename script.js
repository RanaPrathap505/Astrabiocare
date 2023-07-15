// Modal functionality
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", function() {
  modal.classList.add("show");
});

span.addEventListener("click", function() {
  modal.classList.remove("show");
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
});

// Form submission and list addition
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var input = document.getElementById("myInput").value;
  if (input.trim() !== "") {
    var li = document.createElement("li");
    li.textContent = input;
    document.getElementById("myList").appendChild(li);
    document.getElementById("myInput").value = "";
  }
});

// Theme toggle
var themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function() {
  var body = document.body;
  body.classList.toggle("dark-theme");
  // Remember the user's theme preference
  window.localStorage.setItem('theme', body.classList.contains("dark-theme") ? 'dark' : 'light');
});

// Set theme from local storage
window.onload = function() {
  var theme = window.localStorage.getItem('theme');
  if (theme === 'dark') document.body.classList.add('dark-theme');
};

// Contact form submission
var contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !message) {
    displayFeedback('All fields are required.', 'error');
  } else {
    submitForm(name, email, message);
    contactForm.reset();
    displayFeedback('Form submitted successfully!', 'success');
  }
});

// Helper function to display feedback
function displayFeedback(message, type) {
  var feedbackElement = document.createElement('p');
  feedbackElement.classList.add(type);
  feedbackElement.textContent = message;

  var formSection = document.querySelector('section');
  formSection.appendChild(feedbackElement);

  // Remove feedback message after 5 seconds
  setTimeout(function() {
    formSection.removeChild(feedbackElement);
  }, 5000);
}

// Mock form submission
function submitForm(name, email, message) {
  console.log('Form submitted with:', name, email, message);
  // Perform form submission, e.g., send data to server via AJAX
}
