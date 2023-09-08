function createShoppingList(array1, array2){
    let shoppingList = [];
    for (let i = 0; i < array1.length - 1; i+=2) {
        shoppingList[array1[i]] = Number(array1[i+1]);
    }
    for (let i = 0; i < array2.length - 1; i+=2) {
       if (shoppingList.hasOwnProperty(array2[i])) {
        shoppingList[array2[i]] += Number(array2[i+1]);
       }
       else{
        shoppingList[array2[i]] = Number(array2[i+1]);
       }
    }
    for (const key in shoppingList) {
        console.log(`${key} -> ${shoppingList[key]}`);
    }
}