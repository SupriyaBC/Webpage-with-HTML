function loginSubmit(event) {
    event.preventDefault();
    // Add your login logic here

    // For demonstration purposes, redirecting to home.html
    window.location.href = 'home.html';
}

function registerSubmit(event) {
    event.preventDefault();

    // Retrieve values from the registration form
    const registerEmail = document.getElementById('register-email').value;
    const registerPassword = document.getElementById('register-password').value;
    const registerConfirmPassword = document.getElementById('register-confirm-pass').value;

    // Validate email format
    if (!isValidEmail(registerEmail)) {
        alert('Invalid email format.');
        return;
    }

    // Validate password length
    if (registerPassword.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Check if passwords match
    if (registerPassword !== registerConfirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Add your registration logic here

    // For demonstration purposes, redirecting to home.html after registration
    window.location.href = 'home.html';
}

function isValidEmail(email) {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function switchForm(className, event) {
    event.preventDefault();
    const allForms = document.querySelectorAll('form');
    const formToShow = document.querySelector(`form.${className}`);

    allForms.forEach(form => {
        form.classList.remove('active');
    });

    formToShow.classList.add('active');
}
