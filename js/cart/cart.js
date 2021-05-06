import View from './cartView.js';
import * as constans from '../utils/constans.js';
import Cart from './cartFuntctions.js';

const mainBlock = document.querySelector('#main');


export default {

    render() { 
        mainBlock.innerHTML = View.render(Cart.getCartArray());
    }
}