import View from './productsByCategoryView.js';
import Product from './productsFunctions.js';
import * as Helpers from '../utils/helpers.js';
import * as constans from '../utils/constans.js';

const mainBlock = document.querySelector('#main');
let arrayProducts = [];

function productsOnPage() {
    return mainBlock.querySelectorAll('.product_item').length;
}

function splitArrayToView(arrayProducts) {
    let newMass = [];

    let count = productsOnPage() ? productsOnPage() : 0;

    for (let i = count; i < (constans.PRODUCTS_TO_VIEW + count); i++) {
        newMass.push(arrayProducts.products[i]);
    }
    return newMass;

}


export default {
    setData(newCategoryproducts) {
        arrayProducts = newCategoryproducts;
    },

    render() {


        mainBlock.innerHTML = View.render(splitArrayToView(arrayProducts), productsOnPage() + constans.PRODUCTS_TO_VIEW,arrayProducts.category_name[0].name);

        const goBack = mainBlock.querySelector('#goBack');
        Helpers.goBack(goBack);

        Product.plusProduct(arrayProducts);
        Product.minusProduct(arrayProducts);

        document.getElementById("products").addEventListener('wheel', function (event) {
            let count = productsOnPage();
            if (event.deltaMode == event.DOM_DELTA_PIXEL) {
                var modifier = 1;
                if (count <= constans.PRODUCTS_TO_VIEW) {
                    document.querySelector('.product_block').innerHTML += View.render(splitArrayToView(arrayProducts), count + constans.PRODUCTS_TO_VIEW,arrayProducts.category_name[0].name);
                }

            }
            if (event.deltaY != 0) {
                this.scrollLeft += modifier * event.deltaY;
                event.preventDefault();
            }
        });

        // mainBlock.innerHTML = View.render(arrayProducts);
        
        // const goBack = mainBlock.querySelector('#goBack');
        // Helpers.goBack(goBack);

        // Product.plusProduct(arrayProducts);
        // Product.minusProduct(arrayProducts);
    }
}