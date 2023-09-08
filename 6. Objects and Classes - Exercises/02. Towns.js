function createTownList(array){
    let towns = [];
    for (let i = 0; i < array.length; i++) {
        let [townName, townLatitude, townLongitude] = array[i].split(' | ');
        let townConst = {
            town: townName,
            latitude: (Number(townLatitude)).toFixed(2),
            longitude: (Number(townLongitude)).toFixed(2)
        }
        towns.push(townConst);
    }
    towns.forEach(town => {
        console.log(town)
    });
}