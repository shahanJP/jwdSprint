//Form Validation

//Variable Target///

const form = document.querySelector("#form");
const inputValue = document.getElementById("InputValue");
const assignValue = document.getElementById("assignValue");
const statusValue = document.getElementById("statusValue");
const dateValue = document.getElementById("dateValue");
const descValue = document.getElementById("descValue");

form.addEventListener("submit", (event) => {
  validateForm();
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = document.querySelectorAll(".input-group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  //Task Name
  if (inputValue.value.trim() === "") {
    setError(inputValue, "*Please Enter Your Name");
  } else {
    setSuccess(inputValue);
  }
  //Assign To
  if (assignValue.value === "") {
    setError(assignValue, "*Please Choose Team Member");
  } else {
    setSuccess(assignValue);
  }
  //Status
  if (statusValue.value === "") {
    setError(statusValue, "*Please Choose Your Status");
  } else {
    setSuccess(statusValue);
  }

  //date
  if (dateValue.value == "") {
    setError(dateValue, "*Please Choose Your Due Date");
  } else {
    setSuccess(dateValue);
  }
  //Description
  if (descValue.value.trim().length < 10 || descValue.value.trim() > 200) {
    setError(
      descValue,
      "*Description Minimum 10 and Maximum 200 characters long"
    );
  } else {
    if (descValue.value.trim().length < 10 || descValue.value.trim() > 200) {
    } else {
      setSuccess(descValue);
    }
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}
