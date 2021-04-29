export default {
    callAPI(url) {
        return fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
    },

    getCategories(request) {
        return this.callAPI(`../apiCallsJSON/${request}.json`);
    },
    getGoodsByCategory(request, params) {
        return this.callAPI(`../apiCallsJSON/${request}_${params}.json`);
    }
};