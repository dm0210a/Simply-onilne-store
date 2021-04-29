import API from '../api/apiCalls.js';
import gdView from '../goods/goodsByCategoryView.js'
import * as constans from '../utils/constans.js';
export default{
    async mainRoute() {
        
        const json = await API.getCategories(constans.GET_CATEGORIES);
        console.log(json);
    },
    async categoryRoute(params){
        const json = await API.getGoodsByCategory(constans.GET_GOODS,params.id);
        document.querySelector('#main').innerHTML = gdView.render(json,'400');
    }
}