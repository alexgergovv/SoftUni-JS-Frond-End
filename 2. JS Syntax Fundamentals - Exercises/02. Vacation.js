function CalculatePriceForVacation(people, type, day){
    let price = 0;
    if(day=="Friday"){
        if(type=="Students"){
            price=8.45;
        }
        else if(type=="Business"){
            price=10.9;
        }
        else{
            price=15;
        }
    }
    else if(day=="Saturday"){
        if(type=="Students"){
            price=9.8;
        }
        else if(type=="Business"){
            price=15.6;
        }
        else{
            price=20;
        }
    }
    else{
        if(type=="Students"){
            price=10.46;
        }
        else if(type=="Business"){
            price=16;
        }
        else{
            price=22.5;
        }
    }

    if(type=="Business" && people>=100){
        people-=10;
    }

    let total = people*price;

    if(type=="Students" && people>=30){
        total*=0.85;
    }
    else if(type=="Regular" && (people>=10 && people<=20)){
        total*=0.95
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}