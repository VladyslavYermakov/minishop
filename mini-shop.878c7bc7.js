let t,e=[{id:1,title:"Навушники",price:1200,category:"tech",photo:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRxTgO5gJK-r6yYR2gzXTaejbTvn11xBFirT6MWyVlx0V1EPyxo2I81HrLWaMLqB6DvSBW1QSlifcEG2OFUaGnmOIE9_PSz-Z5zAs3TgaM8-9yEN4ziKGDDgX0"},{id:2,title:"Футболка",price:700,category:"clothes",photo:"https://www.adverti.ru/media/catalog/product/1/6/16614.30_14.jpg"},{id:3,title:"Смарт-годинник",price:2500,category:"tech",photo:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKShN6qcn_IgQl7cPnDveAiJlemzVejvvsXsNs9tl83j8zxY6o-_L-_DWaz3ZxOwodxHDu-siSPVnEqjTeX8KxDerkkDh2sRxB_2QUvwoG20ah0Uxr3XG2Yg"}],r=document.querySelector(".product"),c="cart",u=document.querySelector(".cart-items"),i=document.querySelector(".total"),n=document.querySelector("#openCart"),o=document.querySelector("#cartModal"),d=document.querySelector(".close"),a=[],s=function(){if(u.innerHTML="",0===a.length){u.innerHTML="<p>кошик порожній</p>",i.innerHTML="";return}a.forEach(t=>{u.innerHTML+=`
            <p>${t.title} <br> \u{426}\u{456}\u{43D}\u{430}: ${t.price} UAH <br> \u{41A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C}: ${t.quantity}</p>
        `});let t=a.reduce((t,e)=>t+e.price*e.quantity,0);i.textContent=`\u{417}\u{430}\u{433}\u{430}\u{43B}\u{44C}\u{43D}\u{430} \u{432}\u{430}\u{440}\u{442}\u{456}\u{441}\u{442}\u{44C}: ${t} uah`};n.addEventListener("click",()=>{o.classList.remove("hidden"),s()}),d.addEventListener("click",()=>{o.classList.add("hidden")}),o.addEventListener("click",t=>{t.target===o&&o.classList.add("hidden")}),s(),r.innerHTML="",e.forEach(t=>{r.innerHTML+=`
        <div class="product-card">
            <img src="${t.photo}" width="200" height="200" class="product-photo">
            <div class="product-info">
                <h3 class="product-title">${t.title}</h3>
                <p class="product-price">${t.price} UAH</p>
                <button data-id="${t.id}" class="product-btn">\u{41A}\u{443}\u{43F}\u{438}\u{442}\u{438}</button>
            </div>
        </div>
        `}),(t=localStorage.getItem(c))&&(a=JSON.parse(t)),document.querySelector(".product").addEventListener("click",t=>{if("BUTTON"!==t.target.tagName)return;let r=Number(t.target.dataset.id),u=e.find(t=>t.id===r);if(!u)return;let i=a.find(t=>t.id===r);i?i.quantity+=1:a.push({...u,quantity:1}),localStorage.setItem(c,JSON.stringify(a)),s()});
//# sourceMappingURL=mini-shop.878c7bc7.js.map
