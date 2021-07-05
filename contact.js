function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.contactForm.name.value;
  const email = document.contactForm.email.value;

  let nameErr = true;
  let emailErr = true;

  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    const regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    const regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if ((nameErr || emailErr) === false) {
    alert("Thank you!");
  }
});
