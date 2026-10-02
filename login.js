function login() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Reba niba hari account yabitswe
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Nta account irabaho
    if (users.length === 0) {
        message.innerHTML = "No account found. Please create an account first.";
        message.style.color = "red";
        return;
    }

    // Shaka user
    let user = users.find(
        u => u.email === email && u.password === password
    );

    // Niba atabonetse
    if (!user) {
        message.innerHTML = "Invalid email or password.";
        message.style.color = "red";
        return;
    }

    // Login successful
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    message.innerHTML = "Login Successful!";
    message.style.color = "green";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);

}