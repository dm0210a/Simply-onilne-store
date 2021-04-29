export default {
 

    render(data, cartPrice) {
        return (`
        <div class="content_block">
        <button id="goBack">BACK</button>
            <div class="title_block">
                <h1>${data.category_name[0].name}</h1>
            </div>
            <div class="cart">
                <div class="cart_block">
                    <div>
                        <img src="../assets/img/cart.png" alt="shoping cart" />
                    </div>
                    <div class="cart_price">
                        $${cartPrice}
                    </div>
                </div>
            </div>
        </div>
        <div class="category_block">
        ${data.goods.map((element, index) => (
            ` 
            <div class="category_item" data-id="${element.id}">
               
                    <div class="category_image">
                        <img src="${element.icon}" alt="${element.title}" />
                    </div>
                    <div class="catergory_title">
                        <span>${element.title}</span> <div class="minus" data-id="${element.id}">-</div><span class="number">0</span><div class="plus" data-id="${element.id}">+</div>  
                    </div>
               
            </div>
            `
        )).join('')}
        </div>`);
    }
}