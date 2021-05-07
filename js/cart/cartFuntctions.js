import STORAGE from '../utils/localStorage.js';
import CartControll from './cart.js';
import * as Constans from '../utils/constans.js';
import Product from '../products/productsFunctions.js';

let categoriesInCart;


export default {
    setCartPrice(price) {
        STORAGE.setToStorage('cart_price', price)

        let cart = document.querySelector('.cart_price') || 0;
        if(cart !=0){
            document.querySelector('.cart_price').innerHTML = `$${price}`;
        }
        
    },
    plusCartPrice(price) {
        return parseInt(this.getCartPrice()) + price;
    },
    minusCartPrice(price) {
        return parseInt(STORAGE.getFromStorage('cart_price')) - price;
    },
    getCartPrice() {
        return STORAGE.getFromStorage('cart_price') ? STORAGE.getFromStorage('cart_price') : 0;
    },
    getPriceForProdcut(price, quantity) {
        return price * quantity;
    },
    getCategoryName(hash) {
        for (let i = 0; i < categoriesInCart.length; i++) {
            if (categoriesInCart[i].hash == hash) {
                return categoriesInCart[i].name;
            }
        }
    },
    getPriceForCategory(category_name) {
        let arrayCategories = JSON.parse(STORAGE.getFromStorage(category_name))
        let price = 0;
        if (arrayCategories) {
            for (let i = 0; i < arrayCategories.length; i++) {

                price += (arrayCategories[i].price * arrayCategories[i].quantity)
            }
            return price;
        }

    },
    getCartArray() {
        let arrayCart = {};

        categoriesInCart = JSON.parse(STORAGE.getFromStorage('categories_in_cart'));

        if (categoriesInCart) {
            for (let i = 0; i < categoriesInCart.length; i++) {
                arrayCart[categoriesInCart[i].hash] = JSON.parse(STORAGE.getFromStorage(categoriesInCart[i].hash));
            }
            return arrayCart;
        }
        return undefined;
       
    },
    plusProduct(id,category){
        let products = JSON.parse(STORAGE.getFromStorage(category));
        if(products){
            for (let i = 0; i < products.length; i++) {
                if(products[i].id == id){
                    products[i].quantity++;
                    STORAGE.setToStorage(category, JSON.stringify(products));
                    this.setCartPrice(this.plusCartPrice(parseInt(products[i].price)));
                    break;
                }
            }
        }
        
    },
    minusProduct(id,category){
        let products = JSON.parse(STORAGE.getFromStorage(category));
        if(products){
            for (let i = 0; i < products.length; i++) {
                if(products[i].id == id){
                    products[i].quantity--;
                    this.setCartPrice(this.minusCartPrice(parseInt(products[i].price)));
                    if (products[i].quantity == 0) {
                        products.splice(i, 1)
                    }
                   
                    if (products.length == 0) {
                        Product.deleteCategoryFromStorage(category);
                    }
                    STORAGE.setToStorage(category, JSON.stringify(products));
                    
                    break;
                }
            }
        }
        
    },
    deleteProduct(id,category){
        let products = JSON.parse(STORAGE.getFromStorage(category));
        if(products){
            for (let i = 0; i < products.length; i++) {
                if(products[i].id == id){
                    let price = products[i].quantity * products[i].price;
                    products[i].quantity = 0;
                    this.setCartPrice(this.minusCartPrice(parseInt(price)));
                    if (products[i].quantity == 0) {
                        products.splice(i, 1)
                    }
                   
                    if (products.length == 0) {
                        Product.deleteCategoryFromStorage(category);
                    }
                    STORAGE.setToStorage(category, JSON.stringify(products));
                    
                    break;
                }
            }
        }
        
    },

    buttonBuy(element) {
        element.addEventListener('click', () => {
            let price = STORAGE.getFromStorage('cart_price');
            console.log(`!!!Purchase is done!!!`);
            console.log(`Price of purchase: ${price}`);
            STORAGE.deleteAll();
            CartControll.render();
        })
    },
    buttonClear(element) {
        element.addEventListener('click', () => {
            STORAGE.deleteAll();
            CartControll.render();
        })

    },
    buttonPlus() {
        document.querySelector('.cart_items').addEventListener('click', e => {
            if (e.target.classList.contains('plus')) {
                const id = e.target.getAttribute('data-id');
                const category = e.target.getAttribute('data-category');

                let quantity = Product.getProductQuantity(id,category);

                if (quantity < (Constans.MAX_QUANTITY)) {
                    this.plusProduct(id,category);
                    CartControll.render();
                }
            }
        })
    },
    buttonMinus() {
        document.querySelector('.cart_items').addEventListener('click', e => {
            if (e.target.classList.contains('minus')) {
                const id = e.target.getAttribute('data-id');
                const category = e.target.getAttribute('data-category');

                let quantity = Product.getProductQuantity(id,category);

                if (quantity != Constans.MIN_QUANTITY) {
                    this.minusProduct(id,category);
                    CartControll.render();
                }
            }
        })
    },
    buttonDelete() {
        document.querySelector('.cart_items').addEventListener('click', e => {
            if (e.target.classList.contains('delete')) {
                const id = e.target.getAttribute('data-id');
                const category = e.target.getAttribute('data-category');
                    this.deleteProduct(id,category);
                    CartControll.render();
            }
        })
    }

}
