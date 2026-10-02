function resetPassword() {

    let email = document.getElementById("email").value.trim();
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Reba niba email ibaho
    let user = users.find(u => u.email === email);

    if (!user) {
        message.innerHTML = "Email not found.";
        message.style.color = "red";
        return;
    }

    // Reba niba password zihuye
    if (newPassword !== confirmPassword) {
        message.innerHTML = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    // Hindura password
    user.password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    message.innerHTML = "Password changed successfully!";
    message.style.color = "green";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}