import STORAGE from '../utils/localStorage.js'

let categoriesInCart;

export default {
    setCartPrice(price) {
        STORAGE.setToStorage('cart_price', price)
        document.querySelector('.cart_price').innerHTML = `$${price}`;
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
    getPriceForCategory(category_name){
        let arrayCategories = JSON.parse(STORAGE.getFromStorage(category_name))
        let price = 0;
        if(arrayCategories){
            for (let i = 0; i < arrayCategories.length; i++) {
                
                price += (arrayCategories[i].price * arrayCategories[i].quantity)
            }
            return price;
        }

    },
    getCartArray() {
        let newarray = [];
        let arrayCart = {};

        categoriesInCart = JSON.parse(STORAGE.getFromStorage('categories_in_cart'));

        if (categoriesInCart) {
            for (let i = 0; i < categoriesInCart.length; i++) {
                arrayCart[categoriesInCart[i].hash] = JSON.parse(STORAGE.getFromStorage(categoriesInCart[i].hash));
            }
        }
        // newarray.push(arrayCart);
        let smst = [];
        smst.push(arrayCart);
        return arrayCart;
    }

}
