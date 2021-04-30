import View from './productsByCategoryView.js';
import * as Utils from '../utils/utils.js'

const mainBlock = document.querySelector('#main');
let products = [];
let storage = [];




export default {
    setData(newCategoryproducts) {
        products = newCategoryproducts;
    },

    render() {

        mainBlock.innerHTML = View.render(products, '400');

        const goBack = mainBlock.querySelector('#goBack');
        goBack.addEventListener('click', () => {
            window.history.back()
        })


        Utils.plusToCartInproducts(products);
        Utils.minusToCartInproducts();

        
        


    }
}