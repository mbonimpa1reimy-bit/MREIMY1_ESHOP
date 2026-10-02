function register(){

let username =
document.getElementById("username").value.trim();

let email =
document.getElementById("email").value.trim();

let password =
document.getElementById("password").value;

let confirm =
document.getElementById("confirmPassword").value;

let message =
document.getElementById("message");

if(username==="" || email==="" || password===""){

message.innerHTML="Please fill all fields.";

message.style.color="red";

return;

}

if(password!==confirm){

message.innerHTML="Passwords do not match.";

message.style.color="red";

return;

}

let users =
JSON.parse(localStorage.getItem("users")) || [];

let exists =
users.find(user=>user.email===email);

if(exists){

message.innerHTML="Email already exists.";

message.style.color="red";

return;

}

users.push({

username,

email,

password

});

localStorage.setItem(

"users",

JSON.stringify(users)

);

message.innerHTML="Account created successfully.";

message.style.color="green";

setTimeout(()=>{

window.location.href="INDEX1.html";

},1500);

}