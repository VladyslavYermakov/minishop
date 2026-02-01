let cart = []

export const initCart = function(products){
    const productContainer = document.querySelector(".product")
    productContainer.addEventListener('click', (e) => {
        if(e.target.tagName !== "BUTTON") return
        const id = Number(e.target.dataset.id)
        products.forEach(product => {
            if(product.id === id){
                cart.push(product)
            }
        }
    );
    console.log(cart)
    })
}