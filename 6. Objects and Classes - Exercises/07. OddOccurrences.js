function findOddCountWords(sentence){
    let array = sentence.split(' ');
    array = array.map((x) => x = x.toLowerCase());
    let wordCounts = [];
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        let count = 0;
        for (let k = 0; k < array.length; k++) {
           if (word == array[k]) {
            count++;
           } 
        }
            wordCounts[word] = count;
    }
    let result = "";
    let entries = Object.entries(wordCounts);
    for (const [key, value] of entries) {
        if (value%2==1) {
        result += key + ' ';
        }
    }
    console.log(result)
}