 document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get username and password from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validate username and password (You can add more complex validation here)
        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter username and password.");
            return;
        }

        // Simulate authentication (Replace this with your actual authentication logic)
        if (username === "exampleuser" && password === "examplepassword") {
            // If authentication is successful, redirect or show success message
            alert("Login successful!");
            // Redirect to another page
             window.location.href = "index.html";
        } else {
            // If authentication fails, show error message
            alert("Invalid username or password. Please try again.");
        }
    });
});
