export default {
    render(data,cartPrice) {
        return (`
        <div class="content_block">
            <div class="title_block">
                <h1>Shopping Cart — Make Purchases Now!</h1>
            </div>
            <div class="cart">
                <div class="cart_block">
                    <div>
                        <img src="./img/cart.png" alt="shoping cart" />
                    </div>
                    <div class="cart_price">
                        $${cartPrice}
                    </div>
                </div>
            </div>
        </div>
        <div class="category_block">
        ${data.categories.map((element, index) => (
            ` 
            <div class="category_item">
                <a href="#category/${element.id}">
                    <div class="category_image">
                        <img src="${element.icon}" alt="${element.title}" />
                    </div>
                    <div class="catergory_title">
                        <span>${element.title}</span>
                    </div>
                </a>
            </div>
            `
        )).join('')}
        </div>`);
    }
}