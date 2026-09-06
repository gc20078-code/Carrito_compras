
// Variables
let allContainerCart = document.querySelector('.products-grid');

// Funcion
loadEventListeners();
function loadEventListeners(){
    allContainerCart.addEventListener('click', addProduct);
}

function addProduct(e){ 
     e.preventDefault();
    if(e.target.classList.contains('add-to-cart')){
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector('h3').textContent,
        price: product.querySelector('.price').textContent,
    }
    console.log(infoProduct);
}