// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the input values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Validate the email
    if (!validateEmail(email)) {
        // Display error message
        const errorElement = document.querySelector('#email-error');
        errorElement.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validation passed, submit the form
    form.submit();
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
