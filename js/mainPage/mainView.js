import Cart from '../cart/cartFuntctions.js';
import * as constans from '../utils/constans.js';

export default {
    render(data, elementsToShow) {

        if (elementsToShow == constans.CATEGORIES_TO_VIEW) {
            return (`
            <div class="content_block">
                <div class="title_block">
                    <h1>Shopping Cart — Make Purchases Now!</h1>
                </div>
                <div class="cart">
                <a href="#cart">
                    <div class="cart_block">
                        <div>
                            <img src="../assets/img/cart.png" alt="shoping cart" />
                        </div>
                        <div class="cart_price">
                            $${Cart.getCartPrice()}
                        </div>
                    </div>
                </a>
                </div>
            </div>
            <div class="category_block" id="categories">
            ${data.map((element, index) => (
                ` 
                <div class="category_item">
                    <a href="#category/${element.id}">
                        <div class="category_image">
                            <img src="${element.icon}" alt="${element.title}" />
                        </div>
                        <div class="catergory_title">
                            <span>${element.title}</span>
                        </div>
                    </a>
                </div>
                `
            )).join('')}
            </div>`);
        } else {
            return (`
        ${data.map((element, index) => (
                ` 
            <div class="category_item">
                <a href="#category/${element.id}">
                    <div class="category_image">
                        <img src="${element.icon}" alt="${element.title}" />
                    </div>
                    <div class="catergory_title">
                        <span>${element.title}</span>
                    </div>
                </a>
            </div>
            `
            )).join('')}
        `);
        }

    }
}