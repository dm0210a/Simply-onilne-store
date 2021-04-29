import View from './goodsByCategoryView.js';
import * as Utils from '../utils/utils.js'

const mainBlock = document.querySelector('#main');
let goods = [];




export default {
    setData(newCategoryGoods) {
        goods = newCategoryGoods;
    },

    render() {

        mainBlock.innerHTML = View.render(goods, '400');

        const goBack = mainBlock.querySelector('#goBack');
        goBack.addEventListener('click', () => {
            window.history.back()
        })


        Utils.plusToCartInGoods();
        Utils.minusToCartInGoods();

      



    }
}