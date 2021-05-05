import API from '../api/apiCalls.js';
import mainPage from '../mainPage/main.js'
import * as constans from '../utils/constans.js';
import productsPage from '../products/productsByCategory.js';
export default{
    async mainRoute() {
        const data = await API.getCategories(constans.GET_CATEGORIES);
        mainPage.setData(data);
        mainPage.render();
    },
    async categoryRoute(params){
        const productsByCategory = await API.getproductsByCategory(constans.GET_products,params.id);
        productsPage.setData(productsByCategory);
        productsPage.render();
        
    }
}