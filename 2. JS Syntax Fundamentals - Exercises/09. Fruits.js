function PriceForFruit(fruit, weight, price){
    let kg=weight/1000;
    console.log(`I need $${(kg*price).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}