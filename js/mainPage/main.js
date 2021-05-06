import View from './mainView.js';
import * as constans from '../utils/constans.js'

const mainBlock = document.querySelector('#main');
let arrayCategories = [];

function categoriesOnPage() {
    return mainBlock.querySelectorAll('.category_item').length;
}

function splitArrayToView(arrayCategories) {
    let newMass = [];

    let count = categoriesOnPage() ? categoriesOnPage() : 0;

    for (let i = count; i < (constans.CATEGORIES_TO_VIEW + count); i++) {
        newMass.push(arrayCategories.categories[i]);
    }
    return newMass;

}


export default {
    setData(newCategories) {
        arrayCategories = newCategories;
    },

    render() {
        mainBlock.innerHTML = View.render(splitArrayToView(arrayCategories), categoriesOnPage() + constans.CATEGORIES_TO_VIEW);

        document.getElementById("categories").addEventListener('wheel', function (event) {
            let count = categoriesOnPage();
            if (event.deltaMode == event.DOM_DELTA_PIXEL) {
                var modifier = 1;
                if (count <= constans.CATEGORIES_TO_VIEW) {
                    document.querySelector('.category_block').innerHTML += View.render(splitArrayToView(arrayCategories), count + constans.CATEGORIES_TO_VIEW);
                }

            }
            if (event.deltaY != 0) {
                this.scrollLeft += modifier * event.deltaY;
                event.preventDefault();
            }
        });
    }
}