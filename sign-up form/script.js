// Get necessary elements
const form = document.getElementById("signup-form");
const container = document.querySelector(".container");
const emailInput = document.getElementById("email");
const successMessageContainer = document.querySelector(".success-message-container");
const dismissButton = document.getElementById("dismiss-button");

// Form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
        showSuccessMessage(email);
        emailInput.value = "";
    } else {
        alert("Please enter a valid email address");
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message with the email entered
function showSuccessMessage(email) {
    successMessageContainer.style.display = "block";

    const showSuccessMessage = successMessageContainer.querySelector("p strong");
    showSuccessMessage.textContent = email;

    container.style.display = "none";
}

// Dismiss the success message when the dismiss button is clicked
dismissButton.addEventListener("click", function () {
    successMessageContainer.style.display = "none";

    container.style.display = "block";
});