const formSubmit = document.querySelector(".login-form");
formSubmit.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
