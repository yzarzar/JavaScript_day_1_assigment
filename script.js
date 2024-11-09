/* 
Password validation requirements
================================

1. At least 8 characters long
2. At least one lowercase letter
3. At least one uppercase letter
4. At least one digit
5. At least one special character
*/

// const password = document.getElementById("password");
// const errorMessage = document.getElementById("error-message");
// const validateBtn = document.getElementById("validate-btn");

// // Event listener for password validation button click
// validateBtn.addEventListener("click", () => {
//   const passwordValue = password.value; // Get the value of the password input
//   const passwordLength = /.{8,}/.test(passwordValue); // At least 8 characters
//   const lowercase = /[a-z]/.test(passwordValue); // at least one lowercase letter
//   const uppercase = /[A-Z]/.test(passwordValue); // at least one uppercase letter
//   const digit = /[0-9]/.test(passwordValue); // at least one digit
//   const specialChar = /[!@#$%]/.test(passwordValue); // at least one special character

//   if (!passwordValue) {
//     errorMessage.textContent = "Please enter a password.";
//     errorMessage.style.color = "red";
//   } else {
//     const error = [];

//     if (!passwordLength) error.push("At least 8 characters.");
//     if (!lowercase) error.push("At least one lowercase letter.");
//     if (!uppercase) error.push("At least one uppercase letter.");
//     if (!digit) error.push("At least one digit.");
//     if (!specialChar) error.push("At least one special character.");

//     if (error.length > 0) {
//       errorMessage.innerHTML = error.join("<br />");
//       errorMessage.style.color = "red";
//     } else {
//       errorMessage.textContent = "Password is valid!";
//       errorMessage.style.color = "green";
//     }
//   }
// });

// Function to validate password
function validatePassword() {
  const password = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  const passwordValue = password.value; // Get the value of the password input
  const passwordLength = /.{8,}/.test(passwordValue); // At least 8 characters
  const lowercase = /[a-z]/.test(passwordValue); // at least one lowercase letter
  const uppercase = /[A-Z]/.test(passwordValue); // at least one uppercase letter
  const digit = /[0-9]/.test(passwordValue); // at least one digit
  const specialChar = /[!@#$%]/.test(passwordValue); // at least one special character

  if (!passwordValue) {
    errorMessage.textContent = "Please enter a password.";
    errorMessage.style.color = "red";
  } else {
    const error = [];

    if (!passwordLength) error.push("At least 8 characters.");
    if (!lowercase) error.push("At least one lowercase letter.");
    if (!uppercase) error.push("At least one uppercase letter.");
    if (!digit) error.push("At least one digit.");
    if (!specialChar) error.push("At least one special character.");

    if (error.length > 0) {
      errorMessage.innerHTML = error.join("<br />");
      errorMessage.style.color = "red";
    } else {
      errorMessage.textContent = "Password is valid!";
      errorMessage.style.color = "green";
    }
  }
}
