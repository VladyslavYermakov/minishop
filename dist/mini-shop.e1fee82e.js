let t=[{id:1,title:"Навушники",price:1200,category:"tech"},{id:2,title:"Футболка",price:700,category:"clothes"},{id:3,title:"Смарт-годинник",price:2500,category:"tech"}],e=document.querySelector(".product"),r=[];e.innerHTML="",t.forEach(t=>{e.innerHTML+=`
        <div class="product">
            <h3>${t.title}</h3>
            <p>${t.price}</p>
            <button data-id="${t.id}">\u{41A}\u{443}\u{43F}\u{438}\u{442}\u{438}</button>
        </div>
        `}),document.querySelector(".product").addEventListener("click",e=>{if("BUTTON"!==e.target.tagName)return;let c=Number(e.target.dataset.id);t.forEach(t=>{t.id===c&&r.push(t)}),console.log(r)});
//# sourceMappingURL=mini-shop.e1fee82e.js.map
