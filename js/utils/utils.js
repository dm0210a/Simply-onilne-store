import * as SaveStorage from './localStorage.js';

export function plusToCartInproducts(products){
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('plus')) {
            const id = e.target.getAttribute('data-id');
            const number_block = e.path[2].querySelector('.number');
            
            
            let storage1 = {};

            let vtoroi = {};

            let producti = {};

            let massiv =[];


            producti['category_name'] = products.category_name[0];
           
            let tmpelemnt;
            
            for (let index = 0; index < products.products.length; index++) {
                if(products.products[index].id == id){
                    tmpelemnt = products.products[index];
                    break;
                }
                
            }

            if(localStorage.getItem(tmpelemnt.category)){
                let chtoto = JSON.parse(localStorage.getItem(tmpelemnt.category));


                let elementest;
                for (let i = 0; i < chtoto.length; i++) {
                    if(chtoto[i].id == tmpelemnt.id){
                        chtoto[i].quantity++;
                        localStorage.setItem(tmpelemnt.category,JSON.stringify(chtoto))
                        elementest = true;
                        break;
                    }
                }
                if(elementest != true){
                    tmpelemnt['quantity'] = 1;
                    let newMass = [];
                    newMass.push(tmpelemnt);

                    localStorage.setItem(tmpelemnt.category,JSON.stringify(chtoto.concat(newMass)));
                }

            producti['prod'] = chtoto;
            vtoroi[tmpelemnt.category] = producti;

            console.log(vtoroi);
            
            storage1['cart_storage'] = vtoroi;

            console.log(storage1);
            localStorage.setItem('cart',JSON.stringify(storage1))

            //     if(chtoto.length == undefined){
            //         if(chtoto.id == tmpelemnt.id){
            //             chtoto.quantity++;
            //             localStorage.setItem(tmpelemnt.category,JSON.stringify(chtoto));
            //         }
            //         else
            //         {
            //             tmpelemnt['quantity'] = 1;
            //             massiv.push(chtoto);
            //             massiv.push(tmpelemnt);
            //             localStorage.setItem(tmpelemnt.category,JSON.stringify(massiv));
            //         }
            //     }
            //     else{
            //     for (let index = 0; index < chtoto.length; index++) {
            //         if(chtoto[index].id == tmpelemnt.id){
            //             chtoto[index].quantity++;
            //             localStorage.setItem(tmpelemnt.category,JSON.stringify(chtoto))
            //             break;
            //         }else{
            //             tmpelemnt['quantity'] = 1;
            //             chtoto.push(tmpelemnt);
            //             localStorage.setItem(tmpelemnt.category,JSON.stringify(chtoto))
            //             break;
            //         }
                    
            //     }

            //     // let chtoto = JSON.parse(localStorage.getItem(tmpelemnt.category));
            //     // console.log(chtoto);
            //     // chtoto.forEach((element, index) => {
            //     //     console.log(element);
            //     // });
            // } 
               }else{
                tmpelemnt['quantity'] = 1;
                let smtmas = [];
                 smtmas.push(tmpelemnt)
                localStorage.setItem(tmpelemnt.category,JSON.stringify(smtmas))
               }

               console.log(JSON.parse(localStorage.getItem(tmpelemnt.category)))
            // products.products.forEach((element, index) => {
            //     if(element.id == id){

            //         if(localStorage.getItem(element.category)){
            //          storage = JSON.parse(localStorage.getItem(element.category));
                     
            //         }

                    
            //         storage = JSON.parse(localStorage.getItem('key'));
            //         storage.push(element);
            //         // console.log(storage);
            //         producti['products'] = storage;
            //         localStorage.setItem('key',JSON.stringify(storage))
            //     } 
            // })  
            
            // vtoroi['category1'] = producti;

            // console.log(vtoroi);
            
            // storage1['cart_storage'] = vtoroi;

            // console.log(storage1);
            
            
            
            
            let num = parseInt(number_block.innerHTML)
            num = num < 1000 ? ++num : 999;

            number_block.innerHTML = num;
            SaveStorage.addToStorageElement(id,num);
        }
    })
}
export function minusToCartInproducts(){
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('minus')) {
            const id = e.target.getAttribute('data-id');
            const number_block = e.path[2].querySelector('.number');

            let num = parseInt(number_block.innerHTML)
            num = num != 0 ? --num : 0;

            number_block.innerHTML = num;
            SaveStorage.deleteFromStorageElement(id);
        }
    })
}