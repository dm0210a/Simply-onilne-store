import API from '../api/apiCalls.js';
import View from '../categories/view.js'
import * as constans from '../utils/constans.js';
import GoodsPage from '../goods/goodByCategory.js';
export default{
    async mainRoute() {
        
        const json = await API.getCategories(constans.GET_CATEGORIES);
        console.log(json);
        document.querySelector('#main').innerHTML = View.render(json,'400');
    },
    async categoryRoute(params){
        const goodsByCategory = await API.getGoodsByCategory(constans.GET_GOODS,params.id);
        GoodsPage.setData(goodsByCategory);
        GoodsPage.render();
        
    }
}