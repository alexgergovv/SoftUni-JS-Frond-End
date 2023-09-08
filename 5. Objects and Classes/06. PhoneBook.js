function solve(phoneBook){
    let phone = {};
    for(let line of phoneBook){
        let info = line.split(' ');
        let name = info[0];
        let number = info[1];
        phone[name] = number;
    }
    let entries = Object.entries(phone);
    for (let [key, value] of entries) {
       console.log(`${key} -> ${value}`)
    }
}