// here we list out the product details
const products = [
  { id: 1, name: "Smartphone", category: "Electronics", price: 12000, image: "image/phone.jpg" },
  { id: 2, name: "T-Shirt", category: "Fashion", price: 800, image: "image/T-Shirt.jpeg" },
  { id: 3, name: "Laptop", category: "Electronics", price: 55000, image: "image/laptop.jpeg" },
  { id: 4, name: "Sofa", category: "Home", price: 15000, image: "image/sofa.jpg" },
  { id: 5, name: "Jeans", category: "Fashion", price: 1200, image: "image/jeans.jpg" },
  { id: 6, name: "Television", category: "Electronics", price: 40000, image: "image/television.jpg" },
  { id: 7, name: "Face Wash", category: "Skin Care", price: 900, image: "image/face-wash.jpg" },
  { id: 8, name: "Vitamin-E", category: "Health", price: 2000, image: "image/vitamin-e.jpg" },
  { id: 9, name: "Vitamin-A", category: "Health", price: 20000, image: "image/vitamin-e.jpg" },
  { id: 10, name: "Face Wash", category: "Skin Care", price: 19000, image: "image/face-wash.jpg" },
]

// get all the reference that are required during product listed
const productContainer = document.getElementById('product-list');
const selectCategory = document.getElementById('category');
const productSort = document.getElementById('sort');

// render all the product list
function renderProducts(products) {
  productContainer.innerHTML = ""; // empty existing product list details
  products.forEach((product) => { // render one by one product
    const card = document.createElement("div");
    card.classList.add("product-card"); // add style in to each product card
    // list out product related details inside the card
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p class="price">₹${product.price}</p>
    `;
    productContainer.appendChild(card); // render the product details on my UI
  });
}

// Apply filters and sorting
function applyFilters(){
    // store the filtered data 
    let filteredProduct = [...products]; // store the filtered product
    const category = selectCategory.value; // get category value
    const sort = productSort.value; // get sort value
    if(category !== 'All'){ // check category
        filteredProduct = filteredProduct.filter((p)=> p.category === category);
    }
    // check price range on every product
    if(sort === 'Low to High'){
        filteredProduct.sort((a,b)=>a.price - b.price);
    } else if(sort === 'High to Low'){
         filteredProduct.sort((a,b)=>b.price - a.price);
    }
      renderProducts(filteredProduct);
}

// add change event listener
selectCategory.addEventListener("change",applyFilters);
productSort.addEventListener('change',applyFilters);

// Initial rendering
renderProducts(products);