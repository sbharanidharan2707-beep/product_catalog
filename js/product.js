const products = [
{
name:"Laptop",
price:"₹50000",
image:"image/download (12).jpeg"
},
{
name:"Mobile",
price:"₹20000",
image:"image/shopping.webp"
},
{
name:"Headphone",
price:"₹3000",
image:"image/download (2).jpeg"
}
];

const container = document.getElementById("product-container");

function displayProducts(items){

    container.innerHTML = "";

    items.forEach(product => {

        container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>

            <a href="product-details.html?name=${product.name}">
                <button>View Details</button>
            </a>
        </div>
        `;
    });
}



displayProducts(products);

document.getElementById("search")
.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

const filtered = products.filter(product =>
product.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});