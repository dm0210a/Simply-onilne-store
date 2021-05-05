import STORAGE from '../utils/localStorage.js'

export default {
    setCartPrice(price) {
        STORAGE.setToStorage('cart_price', price)
        document.querySelector('.cart_price').innerHTML = `$${price}`;
    },
    plusCartPrice(price) {
        return parseInt(this.getCartPrice()) + price;
    },
    minusCartPrice() {
        return parseInt(STORAGE.getFromStorage('cart_price')) - price;
    },
    getCartPrice() {
        return STORAGE.getFromStorage('cart_price') ? STORAGE.getFromStorage('cart_price') : 0;
    }

}
