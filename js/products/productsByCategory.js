import View from './productsByCategoryView.js';
import Product from './productsFunctions.js';
import * as Helpers from '../utils/helpers.js'

const mainBlock = document.querySelector('#main');
let arrayProducts = [];




export default {
    setData(newCategoryproducts) {
        arrayProducts = newCategoryproducts;
    },

    render() {

        mainBlock.innerHTML = View.render(arrayProducts);

        const goBack = mainBlock.querySelector('#goBack');
        Helpers.goBack(goBack);

        Product.plusProduct(arrayProducts);
        Product.minusProduct(arrayProducts);
    }
}