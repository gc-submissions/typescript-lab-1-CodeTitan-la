export interface Product {
    name:string;
    price:number;
}

let products:Product[] = [{name:"flops",price: 50}, {name:"scooter", price:120}, {name:"bottle",price:30}];

export const calcAverageProductPrice = (products:Product[]):number  => {
    let average:number = 0;
    let sum:number = 0;
    for(let i = 0; i < products.length; i++){
        sum += products[i].price
    }
    if(products.length === 0) { // If the array is empty return zero.
        return 0;
    }
    return average = sum / products.length; //probably fails on empty array...oof
}

let averagePrice:number = calcAverageProductPrice(products);
//let emptyArray:Product[] = [] // Just to test the function with an empty array...see line 23.
console.log(averagePrice);
//console.log(calcAverageProductPrice(emptyArray))
