// Toggle between login and register forms
function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Simulate logout (redirect to index.html)
function logout() {
    window.location.href = 'index.html';
}

// Login form submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    if (email && password) {
        message.textContent = 'Login successful! Redirecting to dashboard...';
        message.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
});

// Registration form submission
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const message = document.getElementById('register-message');

    if (name && email && password) {
        message.textContent = 'Account created! Redirecting to dashboard...';
        message.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
});
