function LoadBar(number){
    if(number == 100){
        console.log(`100% Complete!\n[${'%'.repeat(10)}]`);
    }
    else{
        console.log(`${number}% [${'%'.repeat(number/10)}${'.'.repeat(10-number/10)}]\nStill loading...`)
    }
}