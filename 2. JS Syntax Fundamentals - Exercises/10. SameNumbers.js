function CheckSameNumbers(num){
    let array = [];
    let i=0;
    while(num>0){
        array[i] = num % 10;
        num-=num%10;
        num/=10;
        i++;
    }
    let same = true;
    let sum=0;
    for (let k = 0; k < array.length; k++) {
        sum+=array[k];
       for (let j = k; j < array.length; j++) {
       if(array[k]!=array[j]){
        same=false;
       }
       }
    }
    if(same){
        console.log("true");
    }
    else{
        console.log("false");
    }
    console.log(sum);
}