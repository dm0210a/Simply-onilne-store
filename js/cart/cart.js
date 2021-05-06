import View from './cartView.js';
import * as constans from '../utils/constans.js';
import Cart from './cartFuntctions.js';
import * as Helpers from '../utils/helpers.js';

const mainBlock = document.querySelector('#main');


export default {

    render() { 
        let cartArray = Cart.getCartArray();
        mainBlock.innerHTML = View.render(cartArray);

        const goBack = mainBlock.querySelector('#goBack');
        Helpers.goBack(goBack);
        
        if(Cart.getCartPrice() != 0){
            const buyButton = mainBlock.querySelector('.buy');
            Cart.buttonBuy(buyButton);
    
            const clearButton = mainBlock.querySelector('.clear');
            Cart.buttonClear(clearButton);

            Cart.buttonPlus();
            Cart.buttonMinus();
            Cart.buttonDelete();
        }
        
    }
}