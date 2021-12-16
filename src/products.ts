export interface Product {
    name:string;
    price:number;
}

let products:Product[] = [{name:"flops",price: 50}, {name:"scooter", price:120}, {name:"bottle",price:30}];

const calcAverageProductPrice = (products:Product[])  => {
    let average:number = 0;
    
    for(let i = 0; i < products.length; i++){
        average += products[i].price
    }
    return average = average / products.length;
}

console.log(calcAverageProductPrice(products));

