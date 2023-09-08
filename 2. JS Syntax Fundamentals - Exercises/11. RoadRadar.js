function CheckSpeedLimit(speed, area){
    let typeSpeeding;
    if(area=="motorway"){
        if(speed >130){
            if(speed-130<=20){
                typeSpeeding = "speeding";
            }
            else if(speed-130<=40){
                typeSpeeding = "excessive speeding";
            }
            else{
                typeSpeeding = "reckless driving";
            }
            console.log(`The speed is ${speed-130} km/h faster than the allowed speed of 130 - ${typeSpeeding}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }
    }
    else if(area=="interstate"){
        if(speed >90){
            if(speed-90<=20){
                typeSpeeding = "speeding";
            }
            else if(speed-90<=40){
                typeSpeeding = "excessive speeding";
            }
            else{
                typeSpeeding = "reckless driving";
            }
            console.log(`The speed is ${speed-90} km/h faster than the allowed speed of 90 - ${typeSpeeding}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a 90 zone`);
        }
    }
    else if(area=="city"){
        if(speed >50){
            if(speed-50<=20){
                typeSpeeding = "speeding";
            }
            else if(speed-50<=40){
                typeSpeeding = "excessive speeding";
            }
            else{
                typeSpeeding = "reckless driving";
            }
            console.log(`The speed is ${speed-50} km/h faster than the allowed speed of 50 - ${typeSpeeding}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a 50 zone`);
        }
    }
    else{
        if(speed >20){
            if(speed-20<=20){
                typeSpeeding = "speeding";
            }
            else if(speed-20<=40){
                typeSpeeding = "excessive speeding";
            }
            else{
                typeSpeeding = "reckless driving";
            }
            console.log(`The speed is ${speed-20} km/h faster than the allowed speed of 20 - ${typeSpeeding}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a 20 zone`);
        }
    }
}