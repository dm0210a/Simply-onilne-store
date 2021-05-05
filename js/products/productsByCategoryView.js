import Cart from '../cart/cartFuntctions.js';
import STORAGE from '../utils/localStorage.js';

function existQuantity(product) {
    let productFromLocalStorage = JSON.parse(STORAGE.getFromStorage(product.category));
    if (productFromLocalStorage) {
        for (let i = 0; i < productFromLocalStorage.length; i++) {
            if (productFromLocalStorage[i].id == product.id) {
                return productFromLocalStorage[i].quantity;
            }
        }
    }
}

export default {


    render(data) {
        return (`
        <div class="content_block">
        <button id="goBack">BACK</button>
            <div class="title_block">
                <h1>${data.category_name[0].name}</h1>
            </div>
            <div class="cart">
                <div class="cart_block">
                    <div>
                        <img src="../assets/img/cart.png" alt="shoping cart" />
                    </div>
                    <div class="cart_price">
                        $${Cart.getCartPrice()}
                    </div>
                </div>
            </div>
        </div>
        <div class="category_block product_block">
        ${data.products.map((element, index) => (
            ` 
            <div class="category_item ${existQuantity(element) ? 'productInCart' : ''}" data-id="${element.id}">
               
                    <div class="category_image ">
                        <img src="${element.icon}" alt="${element.title}" />
                    </div>
                    <div class="catergory_title">
                        <span>${element.title}</span> 
                        <div class="minus" data-id="${element.id}">-</div>
                        <span class="number">${existQuantity(element) ? existQuantity(element) : 0}</span>
                        <div class="plus" data-id="${element.id}">+</div>  
                    </div>
               
            </div>
            `
        )).join('')}
        </div>`);
    }
}