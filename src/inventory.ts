import {Product} from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory:InventoryItem[] = [{product:{name:"motor",price:10.00}, quantity:10},{product:{name:"sensor",price:12.50}, quantity:4},{product:{name:"LED",price:1.00}, quantity:20}]


const calcInventoryValue = (inventory:InventoryItem[]) => {
    let total:number = 0;
    inventory.forEach(item => {total += item.product.price * item.quantity}) 
    return total;
}
console.log(calcInventoryValue(inventory));