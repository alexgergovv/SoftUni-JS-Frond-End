function createAddressBook(input){
    let addressBook = {};
    for (const line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value}`)
     }
}