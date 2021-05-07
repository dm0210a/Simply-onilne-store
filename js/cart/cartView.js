import Cart from '../cart/cartFuntctions.js';


export default {


    render(data) {
        if (Cart.getCartPrice() == 0) {
            return (`
            <div id="cart">
            <div class="content_block">
                <div class="left">
                    <div id="goBack">
                        <img src="../assets/img/backbutton.png" alt="back" />
                    </div>
                    <div class="title_block">
                        <h1>Cart</h1>
                    </div>
                </div>
            </div>
            <div class="cart_blocks">
            <h1>Cart is empty</h1>
            </div>
            </div>
            `)
        } else {
            return (`
        <div id="cart">
            <div class="content_block">
                <div class="left">
                    <div id="goBack">
                        <img src="../assets/img/backbutton.png" alt="back" />
                    </div>
                    <div class="title_block">
                        <h1>Cart</h1>
                    </div>
                </div>
            </div>
            <div class="cart_blocks">
                <div class=cart_items>
                    ${Object.entries(data).map((value, key) => (
                `
                            <div id="${value[0]}" class="categories_in_cart">
                                <span class="cart_category_name">
                                   Category: ${Cart.getCategoryName(value[0])}
                                </span>
                                ${value[1].map((product) => (
                    `
                                        <div class="cart_category_product">
                                            <div class="cart_product_image">
                                                <img src="${product.icon}" alt="${product.title}" />
                                            </div>
                                            <div class="product_name">
                                               <span>Name</span><span>${product.title}</span>
                                            </div>
                                            <div class="cart_price_of_one">
                                            <span>Price</span><span>$${product.price}</span>
                                            </div>
                                            <div class="amount">
                                            <span>Amount</span><span class="number">${product.quantity}</span>
                                            </div>
                                            <div class="cart_product_price">
                                            <span>Price for All</span><span>$${Cart.getPriceForProdcut(product.price, product.quantity)}<span>
                                            </div>
                                            <div class="cart_nav_buttons">
                                                <div class="minus" data-id="${product.id}" data-category="${product.category}"></div>
                                                <div class="plus" data-id="${product.id}" data-category="${product.category}"></div>
                                                <div class="delete" data-id="${product.id}" data-category="${product.category}"></div>
                                            </div> 
                                        </div>
                                    `
                )).join('')}
                                <div class="cart_category_price">Price for category: $${Cart.getPriceForCategory(value[0])}</div>
                            </div>
                        `
            )).join('')}
                </div>
                <div class="cart_info">
                    <div class="cart_info_nav">
                        <div class="navbtn clear">
                         Clear
                        </div>
                        <div class="navbtn buy">
                        Price: $${Cart.getCartPrice()} Buy
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)
        }
    }
}