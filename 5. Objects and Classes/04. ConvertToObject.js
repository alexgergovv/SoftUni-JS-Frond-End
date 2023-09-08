function convertToObject(string){
    let person = JSON.parse(string);
    let entries = Object.entries(person);
    
    for (let [key, value] of entries) {
       console.log(`${key}: ${value}`)
    }
}