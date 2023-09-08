function solve(number, operation1, operation2, operation3, operation4, operation5){
    let array = [operation1, operation2, operation3, operation4, operation5];
    let num = Number(number);
    for (let index = 0; index < array.length; index++) {
        if(array[index] == 'chop'){
            num/=2;
        }
        else if(array[index] == 'dice'){
            num=Math.sqrt(num);
        }
        else if(array[index] == 'spice'){
            num+=1;
        }
        else if(array[index] == 'bake'){
            num*=3;
        }
        else{
            num*=0.8;
        }
        console.log(num);
    }
}