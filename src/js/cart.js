const STORAGE_KEY = "cart"

const cartItemsContainer = document.querySelector(".cart-items")
const tatalContainer = document.querySelector(".total")

const openCart = document.querySelector("#openCart")
const cartModal = document.querySelector("#cartModal")
const closeBtn = document.querySelector(".close")

//збереження на локал сторейдж
function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
}

//завантаження з локал сторейдж
function loadCart(){
   const savedStorage = localStorage.getItem(STORAGE_KEY)
   if(!savedStorage){return}
   cart = JSON.parse(savedStorage)
}

let cart = []
export const renderCart = function(){
    cartItemsContainer.innerHTML = ""

    if(cart.length === 0){
        cartItemsContainer.innerHTML = "<p>кошик порожній</p>"
        tatalContainer.innerHTML = ""
        return
    }
    cart.forEach(item=>{
        cartItemsContainer.innerHTML +=  `
            <p>${item.title} <br> Ціна: ${item.price} UAH <br> Кількість: ${item.quantity}</p>
        `
    })

    let total = cart.reduce((s,item)=>{
        return s + item.price*item.quantity
    }, 0)
     
    tatalContainer.textContent = `Загальна вартість: ${total} uah`}



export const initCart = function(products){
    loadCart()

    const productContainer = document.querySelector('.product')
    productContainer.addEventListener('click',(e)=>{
        if(e.target.tagName !== "BUTTON") return

        const id = Number(e.target.dataset.id)

        const product= products.find(p=>p.id===id)

        if(!product){return}
        const isExist = cart.find(i=>i.id===id)

        if(isExist){
            isExist.quantity +=1
        }else{
            cart.push({...product, quantity:1})
        }
    saveCart()
    renderCart()
    // console.log(cart)
    })
}

// логіка відкриття закриття модалки

openCart.addEventListener('click', () =>{
    cartModal.classList.remove("hidden")
    renderCart() //відмальовує модалку
})
closeBtn.addEventListener('click', () =>{
    cartModal.classList.add("hidden")
})

cartModal.addEventListener("click", (e) =>{
    if(e.target===cartModal){
        cartModal.classList.add("hidden")
    }
})

