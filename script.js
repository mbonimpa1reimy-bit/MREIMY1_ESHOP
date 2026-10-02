
// Reba niba user yarakoze login
let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
    window.location.href = "INDEX1.html";
}

// Erekana username
document.getElementById("welcome").innerHTML =
"Welcome " + user.username;

// Logout Function
function logout() {

    // Kuraho user wakoze login
    localStorage.removeItem("loggedInUser");

    // Gusubira kuri Login Page
    window.location.href = "INDEX1.html";

}

function openMenu(){

document.getElementById("menuList").classList.toggle("show");

}

function openMenu(){

document.getElementById("menuList").classList.toggle("show");

}


const products = [
{
    id:1,
    name:"Laptop",
    price:850000,
    category:"Laptop",
    image:"C://Users//MBNMP REMY//Pictures//image//laptop.png",
    rating:5,
    favorite:true
},
{
    id:2,
    name:"SUMSANG A17 _phone",
    price:300000,
    category:"Phone",
    image:"C://Users//MBNMP REMY//Pictures//image//Phone.png",
    rating:4,
    favorite:false
},
{
    id:3,
    name:"Headphones",
    price:12500,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//Headphones.png",
    rating:5,
    favorite:false
},
{
    id:4,
    name:"Keyboard",
    price:35000,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//Keyboard.png",
    rating:4,
    favorite:false
},
{
    id:5,
    name:"Mouse",
    price:5000,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//Mouse.png",
    rating:4,
    favorite:false
},
{
    id:6,
    name:"USB ORGL",
    price:3500,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//Usb.png",
    rating:4,
    favorite:false
},
{
    id:7,
    name:" All Charger port Type",
    price:15000,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//All Charger port Type.png",
    rating:5,
    favorite:false
},
{
    id:8,
    name:"Speaker",
    price:95000,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//Speaker.png",
    rating:3,
    favorite:false
},
{
    id:9,
    name:"Micro_Speaker",
    price:30000,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//Speaker.png",
    rating:4,
    favorite:false
},
{
    id:10,
    name:"HD camera",
    price:450000,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//HD camera.png",
    rating:4,
    favorite:false
},
{
    id:11,
    name:"EM-screw",
    price:7500,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//EM-screw.png",
    rating:4,
    favorite:true
},
{
    id:12,
    name:"SONY_PROJECTOR",
    price:500000,
    category:"Accessories",
    image:"C://Users//MBNMP REMY//Pictures//image//SONY_PROJECTOR.png",
    rating:4,
    favorite:false
}




];
//cart
let cart =
JSON.parse(localStorage.getItem("cart")) || [];

//show product
function displayProducts(list = products){

let output="";

list.forEach(product=>{

output += `

<div class="card">

<img
src="${product.image}"
width="120"
height="120">

<h3>${product.name}</h3>

<p>${product.price}RWF</p>

<p>${"⭐".repeat(product.rating)}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

<button onclick="toggleFavorite(${product.id})">
${product.favorite ? "❤️" : "🤍"}
</button>

</div>

`;

});

document.getElementById("products").innerHTML=output;

}
displayProducts();

//add funcion to cart
function addToCart(id) {

    let product = products.find(item => item.id === id);

    let existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();
    displayCart();

}


//display cart
function displayCart() {

    let output = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        output += `
        <li>

        <h3>${item.name}</h3>

        <p>Price: ${item.price} RWF</p>

        <button onclick="decreaseQuantity(${item.id})">-</button>

        <span>${item.quantity}</span>

        <button onclick="increaseQuantity(${item.id})">+</button>

        <br><br>

        <strong>Subtotal:
        ${item.price * item.quantity} RWF</strong>

        <br><br>

        <button onclick="removeItem(${index})">
        🗑 Remove
        </button>

        <hr>

        </li>
        `;

    });

    document.getElementById("cart").innerHTML = output;

    document.getElementById("total").textContent = total;

    document.getElementById("cartCount").textContent = cart.length;

}

// remove item
function removeItem(index){

cart.splice(index,1);

saveCart();

displayCart();

}
//save cart
function saveCart(){

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

}
//innitialize app
displayCart();
function clearCart(){

cart=[];

saveCart();

displayCart();

}
// search product
function searchProduct(){

let keyword =
document.getElementById("search").value.toLowerCase();

let filtered =
products.filter(product=>

product.name.toLowerCase().includes(keyword)

);

displayProducts(filtered);

}
//Favorite Button
function toggleFavorite(id){

let product =
products.find(p=>p.id===id);

product.favorite =
!product.favorite;

displayProducts();

}
//filter category

function filterCategory(category){

if(category==="All"){

displayProducts();

return;

}

let filtered =
products.filter(product=>

product.category===category

);

displayProducts(filtered);

}
//contact

function openContact(){

document.getElementById("contactModal").style.display="flex";

}

function closeContact(){

document.getElementById("contactModal").style.display="none";

}


//increase and decrease function

function increaseQuantity(id) {

    let item = cart.find(product => product.id === id);

    if (item) {

        item.quantity++;

        saveCart();
        displayCart();

    }

}

function decreaseQuantity(id) {

    let item = cart.find(product => product.id === id);

    if (item && item.quantity > 1) {

        item.quantity--;

        saveCart();
        displayCart();

    }

}
