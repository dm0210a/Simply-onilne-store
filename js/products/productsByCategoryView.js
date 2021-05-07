import Cart from '../cart/cartFuntctions.js';
import STORAGE from '../utils/localStorage.js';
import * as constans from '../utils/constans.js';

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


    render(data,elementsToShow,category_name) {
        if (elementsToShow == constans.PRODUCTS_TO_VIEW) {
            return (`<div id="productPage">
            <div class="content_block">
                <div class="left">
                    <div id="goBack">
                        <img src="../assets/img/backbutton.png" alt="back"/>
                    </div>
                    <div class="title_block">
                        <h1>${category_name}</h1>
                    </div>
                </div>
                <div class="right">
                    <a href="#cart">
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
                    </a>
                </div>
            </div>
            <div class="product_block" id="products">
            ${data.map((element, index) => (
                ` 
                <div class="product_item" data-id="${element.id}">
                   
                        <div class="product_image ${existQuantity(element) ? 'productInCart' : ''}">
                            <img src="${element.icon}" alt="${element.title}" />
                        </div>
                        <div class="product_title">
                            <span>${element.title}</span>
                            <span class="price">$${element.price}</span> 
                        </div>
                        <div class="product_navigation">
                            <div class="navbtn minus" data-id="${element.id}">
                            </div>
                            <div class="quantity">
                                <span class="amount">amount</span>
                                <span class="number">${existQuantity(element) ? existQuantity(element) : 0}</span>
                            </div>
                            <div class="navbtn plus" data-id="${element.id}">
                            </div>  
                        </div>
                   
                </div>
                `
            )).join('')}
            </div>
        </div>`);
        }else{
            return (`
            ${data.map((element, index) => (
                ` 
                <div class="product_item" data-id="${element.id}">
                   
                        <div class="product_image ${existQuantity(element) ? 'productInCart' : ''}">
                            <img src="${element.icon}" alt="${element.title}" />
                        </div>
                        <div class="product_title">
                            <span>${element.title}</span>
                            <span class="price">$${element.price}</span> 
                        </div>
                        <div class="product_navigation">
                            <div class="navbtn minus" data-id="${element.id}">
                            </div>
                            <div class="quantity">
                                <span class="amount">amount</span>
                                <span class="number">${existQuantity(element) ? existQuantity(element) : 0}</span>
                            </div>
                            <div class="navbtn plus" data-id="${element.id}">
                            </div>  
                        </div>
                   
                </div>
                `
            )).join('')}
            `)
        }
      
    }
}