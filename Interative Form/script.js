const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

nameInput.addEventListener("input", () => {
  const value = nameInput.value.trim();
  if (value.length < 3) {
    nameError.textContent = "Name should have at least 3 letters.";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
});

emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (value === "") {
    emailError.textContent = "Email cannot be empty.";
    emailError.style.display = "block";
  } else if (!value.match(emailPattern)) {
    emailError.textContent = "Email is not valid.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

phoneInput.addEventListener("input", () => {
  const value = phoneInput.value.trim();
  const phonePattern = /^[0-9]{10}$/;

  if (value === "") {
    phoneError.textContent = "Phone number cannot be empty.";
    phoneError.style.display = "block";
  } else if (!value.match(phonePattern)) {
    phoneError.textContent = "Phone number should have 10 digits.";
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    nameError.style.display === "none" &&
    emailError.style.display === "none" &&
    phoneError.style.display === "none" &&
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    phoneInput.value.trim() !== ""
  ) {
    alert("Form submitted successfully ✅");
    form.reset();
  } else {
    alert("Please fix the errors before submitting ❌");
  }
});
