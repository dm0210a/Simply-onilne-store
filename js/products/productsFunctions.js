import STORAGE from '../utils/localStorage.js'
import * as Constans from '../utils/constans.js'
import Cart from '../cart/cartFuntctions.js'

function addNewProducts(currentProduct) {
    currentProduct['quantity'] = 1;

    let newProducts = [];
    newProducts.push(currentProduct);

    return newProducts;
}
function getCurrentProduct(id, arrayProducts) {
    for (let index = 0; index < arrayProducts.length; index++) {
        if (arrayProducts[index].id == id) {
            return arrayProducts[index];
        }
    }
}
function getProductPositionInCart(currentProducts, currentProduct) {
    for (let i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].id == currentProduct.id) {
            return i;
        }
    }
    return -1;
}
function setCategoryToStorage(name, hash) {
    let categoriesMass = [];
    let categoriesObj = {};

    let existingCategories = JSON.parse(STORAGE.getFromStorage('categories_in_cart'));
    if (existingCategories) {
        let isMatch;
        for (let i = 0; i < existingCategories.length; i++) {
            if (existingCategories[i].hash == hash) {
                isMatch = true;
                break;
            }
        }
        if (!isMatch) {
            categoriesObj['name'] = name;
            categoriesObj['hash'] = hash;

            categoriesMass.push(categoriesObj);
            STORAGE.setToStorage('categories_in_cart', JSON.stringify(existingCategories.concat(categoriesMass)));
        }
    } else {
        categoriesObj['name'] = name;
        categoriesObj['hash'] = hash;

        categoriesMass.push(categoriesObj);

        STORAGE.setToStorage('categories_in_cart', JSON.stringify(categoriesMass));
    }
}

function deleteCategoryFromStorage(hash) {
    let existingCategories = JSON.parse(STORAGE.getFromStorage('categories_in_cart'));

    if (existingCategories) {

        for (let i = 0; i < existingCategories.length; i++) {
            if (existingCategories[i].hash == hash) {
                existingCategories.splice(i, 1);
                break;
            }
        }
        STORAGE.setToStorage('categories_in_cart', JSON.stringify(existingCategories));
    }

}

export default {
    getProductQuantity(id, category) {
        let arrayProducts = JSON.parse(STORAGE.getFromStorage(category));
        if (arrayProducts) {
            let product = getCurrentProduct(id, arrayProducts);
            return product ? product.quantity : 0;
        } else {
            return 0;
        }

    },
    addCurrentProductToStorageCart(currentProduct) {
        if (STORAGE.getFromStorage(currentProduct.category)) {
            let currentProducts = JSON.parse(STORAGE.getFromStorage(currentProduct.category));

            let productPosition = getProductPositionInCart(currentProducts, currentProduct);
            if (productPosition != -1) {
                currentProducts[productPosition].quantity++;
                STORAGE.setToStorage(currentProduct.category, JSON.stringify(currentProducts));
            }
            else {
                STORAGE.setToStorage(currentProduct.category, JSON.stringify(currentProducts.concat(addNewProducts(currentProduct))));
            }

        } else {
            STORAGE.setToStorage(currentProduct.category, JSON.stringify(addNewProducts(currentProduct)));
        }

        Cart.setCartPrice(Cart.plusCartPrice(parseInt(currentProduct.price)));
    },
    minusCurrentProductFromStorageCart(currentProduct) {
        if (STORAGE.getFromStorage(currentProduct.category)) {
            let currentProducts = JSON.parse(STORAGE.getFromStorage(currentProduct.category));

            let productPosition = getProductPositionInCart(currentProducts, currentProduct);
            if (productPosition != -1) {
                currentProducts[productPosition].quantity--;

                if (currentProducts[productPosition].quantity == 0) {
                    currentProducts.splice(productPosition, 1)
                }

                if (currentProducts.length == 0) {
                    deleteCategoryFromStorage(currentProduct.category);
                }
                STORAGE.setToStorage(currentProduct.category, JSON.stringify(currentProducts));
            }
            Cart.setCartPrice(Cart.minusCartPrice(parseInt(currentProduct.price)));
        }

    },
    plusProduct(arrayProducts) {
        document.querySelector('.product_block').addEventListener('click', e => {
            if (e.target.classList.contains('plus')) {
                const id = e.target.getAttribute('data-id');
                const number_block = e.path[2].querySelector('.number');

                let currentProduct = getCurrentProduct(id, arrayProducts.products);

                let quantity = this.getProductQuantity(id, currentProduct.category);

                if (currentProduct && quantity < (Constans.MAX_QUANTITY - 1)) {
                    this.addCurrentProductToStorageCart(currentProduct);
                    number_block.innerHTML = this.getProductQuantity(id, currentProduct.category);
                    setCategoryToStorage(arrayProducts.category_name[0].name, currentProduct.category);
                }
            }
        })
    },
    minusProduct(arrayProducts) {
        document.querySelector('.product_block').addEventListener('click', e => {
            if (e.target.classList.contains('minus')) {
                const id = e.target.getAttribute('data-id');
                const number_block = e.path[2].querySelector('.number');

                let currentProduct = getCurrentProduct(id, arrayProducts.products);

                let quantity = this.getProductQuantity(id, currentProduct.category);

                if (currentProduct && quantity != Constans.MIN_QUANTITY) {
                    this.minusCurrentProductFromStorageCart(currentProduct);
                    number_block.innerHTML = this.getProductQuantity(id, currentProduct.category);
                }

                console.log(JSON.parse(STORAGE.getFromStorage(currentProduct.category)));
                console.log(JSON.parse(STORAGE.getFromStorage('categories_in_cart')));
            }
        })
    }
}