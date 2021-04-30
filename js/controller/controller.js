import API from '../api/apiCalls.js';
import View from '../categories/view.js'
import * as constans from '../utils/constans.js';
import productsPage from '../products/productByCategory.js';
export default{
    async mainRoute() {
        
        const json = await API.getCategories(constans.GET_CATEGORIES);
        console.log(json);
        document.querySelector('#main').innerHTML = View.render(json,'400');
    },
    async categoryRoute(params){
        const productsByCategory = await API.getproductsByCategory(constans.GET_products,params.id);
        productsPage.setData(productsByCategory);
        productsPage.render();
        
    }
}