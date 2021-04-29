import * as SaveStorage from './localStorage.js';

export function plusToCartInGoods(){
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('plus')) {
            const id = e.target.getAttribute('data-id');
            const number_block = e.path[2].querySelector('.number');

            let num = parseInt(number_block.innerHTML)
            num = num < 1000 ? ++num : 999;

            number_block.innerHTML = num;
            SaveStorage.addToStorageElement(id,num);
        }
    })
}
export function minusToCartInGoods(){
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('minus')) {
            const id = e.target.getAttribute('data-id');
            const number_block = e.path[2].querySelector('.number');

            let num = parseInt(number_block.innerHTML)
            num = num != 0 ? --num : 0;

            number_block.innerHTML = num;
            SaveStorage.deleteFromStorageElement(id);
        }
    })
}