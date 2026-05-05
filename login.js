const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "admin" && pass === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful. Transfer in progress.";
        
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 1000);
        
    } else {
        message.textContent = "Incorrect username or password!";
    }
});