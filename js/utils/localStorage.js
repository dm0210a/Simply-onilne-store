export default {
    setToStorage(key, value) {
        localStorage.setItem(key, value);
    },
    getFromStorage(key) {
        return localStorage.getItem(key);
    },
    deleteAll() {
        localStorage.clear();
    }
}
