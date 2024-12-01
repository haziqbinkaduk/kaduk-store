// Event Listener for Form Submission
document.getElementById("feedback-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload  

});

function submission() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validation and display message
  if (name && email && message) {
    alert(`Thank you, ${name}, for your feedback!\nWe will get back to you at ${email}.`);
  } else {
    alert("Please fill out all fields before submitting.");
  }

}