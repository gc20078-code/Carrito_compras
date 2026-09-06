
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
        console.log(selectProduct); // ← Movido DENTRO del if
    }
}