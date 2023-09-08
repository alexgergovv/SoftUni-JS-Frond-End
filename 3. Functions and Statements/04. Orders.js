function calculateOrderPrice(product, quantity){
    let price = 0;
    if (product === "coffee") {
        price = 1.5 * quantity;
        console.log(price.toFixed(2));
    }
    else if (product === "water") {
        price = 1 * quantity;
        console.log(price.toFixed(2));
    }
    else if (product === "coke") {
        price = 1.4 * quantity;
        console.log(price.toFixed(2));
    }
    else{
        price = 2 * quantity;
        console.log(price.toFixed(2));
    }
}