const productContainer = document.querySelector(".product")
export const renderItem = function(products){
    productContainer.innerHTML = ""
    products.forEach(product => {
        productContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.photo}" width="200" height="200" class="product-photo">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price} UAH</p>
                <button data-id="${product.id}" class="product-btn">Купити</button>
            </div>
        </div>
        `
    })
}