import Router from '../js/router/router.js'
(async () => {
    try {
        Router.init();
    } catch (e) {
        console.error(e);
        console.log('Error' + e.message);
    }
})();