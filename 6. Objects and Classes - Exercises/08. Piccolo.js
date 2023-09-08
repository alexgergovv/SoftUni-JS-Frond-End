function printParkingInfo(array){
    let parking = [];
    for (let i = 0; i < array.length; i++) {
       let [direction, number] = array[i].split(', ');
       if (direction == 'IN') {
        if (!parking.includes(number)) {
        parking.push(number);
        }
       }
       else{
        if(parking.includes(number))
        {
        let index = parking.indexOf(number);
        parking.splice(index, 1);
        }
       }
    }
    parking.sort();
    if (parking.length > 0) {
        parking.forEach(element => {
            console.log(element);
        });
    }
    else{
        console.log(`Parking Lot is Empty`)
    }
}
printParkingInfo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)