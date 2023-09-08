function SearchWord(word, text){
    let array = text.split(' ');
    let found = false;
    for (let index = 0; index < array.length; index++) {
        if (array[index].toLowerCase() == word) {
                found = true;
        }
    }
    if(found){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}