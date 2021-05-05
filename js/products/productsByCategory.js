import View from './productsByCategoryView.js';
import Product from './productsFunctions.js';

const mainBlock = document.querySelector('#main');
let arrayProducts = [];




export default {
    setData(newCategoryproducts) {
        arrayProducts = newCategoryproducts;
    },

    render() {

        mainBlock.innerHTML = View.render(arrayProducts, '400');

        const goBack = mainBlock.querySelector('#goBack');
        goBack.addEventListener('click', () => {
            window.history.back()
        })


        Product.plusProduct(arrayProducts);
        Product.minusProduct(arrayProducts);
        
        
        


    }
}