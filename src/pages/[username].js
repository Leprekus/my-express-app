"use strict";
class Login {
    constructor() {
        this.handleLogin = () => {
            alert('clicked');
            const username = this.usernameInput.value;
            const password = this.passwordInput.value;
            // You can implement your login logic here, e.g., send a request to the server to verify credentials
            // For this example, we'll just log the username and password to the console.
            console.log('Username:', username);
            console.log('Password:', password);
        };
        // Get the container element where you want to render the login component
        this.container = document.getElementById('root');
        // Create the username input
        this.usernameInput = document.createElement('input');
        this.usernameInput.type = 'text';
        this.usernameInput.placeholder = 'Username';
        // Create the password input
        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.placeholder = 'Password';
        // Create the login button
        this.loginButton = document.createElement('button');
        this.loginButton.textContent = 'Login';
        this.loginButton.addEventListener('click', this.handleLogin);
        // Append the inputs and button to the container
        this.container.appendChild(this.usernameInput);
        this.container.appendChild(this.passwordInput);
        this.container.appendChild(this.loginButton);
    }
}
// Instantiate the Login class and render it in the specified container element
console.log('success');
if (window !== undefined) {
    const loginComponent = new Login();
}
