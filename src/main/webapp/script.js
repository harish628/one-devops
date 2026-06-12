// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const unusedVariable = "Sonar Test"; // Sonar should flag this

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
  } else if (name && email && message) { // Duplicate condition
    console.log('Duplicate condition');
  } else {
    alert('Please fill out all fields.');
  }
});

const password = "admin123"; // Hardcoded credential
var test = "hello"; // Sonar often recommends let/const instead of var
eval("alert('Sonar Test')");
eval("console.log(test)"); // Security hotspot
