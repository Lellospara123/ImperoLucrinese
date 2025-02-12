const BASE_URL = 'http://localhost:3000'; // Assicurati che questo sia l'URL del tuo server Node.js

// Funzione per gestire il login
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    if (username && password) {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const message = await response.text();
            loginMessage.textContent = message;

            if (response.ok) {
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);
                document.getElementById('login-container').style.display = 'none';
                document.getElementById('navbar').style.display = 'block';
                document.getElementById('content').style.display = 'block';
            }
        } catch (error) {
            console.error('Error during login:', error);
            loginMessage.textContent = 'Error during login. Please try again.';
        }
    } else {
        loginMessage.textContent = 'Please enter both username and password.';
    }
}
