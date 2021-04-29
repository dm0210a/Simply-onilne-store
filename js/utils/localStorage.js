export function addToStorageElement(element, quantity) {
    const num = getFromStorageElement(element);
    if (num) {
        let quantity = parseInt(num);
        localStorage.setItem(element, ++quantity)
    } else {
        localStorage.setItem(element, quantity)
    }

}
export function deleteFromStorageElement(element) {
    const num = getFromStorageElement(element);
    if (num <= 1) {
        localStorage.removeItem(element)
    } else {
        let quantity = parseInt(num);
        localStorage.setItem(element, --quantity)

    }

}
export function getFromStorageElement(element) {
    return localStorage.getItem(element);
}
export function deleteAll() {
    localStorage.clear();
}