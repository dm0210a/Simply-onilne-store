import STORAGE from './localStorage.js';

export function goBack(elemet){
    elemet.addEventListener('click', () => {
        window.history.back()
    })
}
