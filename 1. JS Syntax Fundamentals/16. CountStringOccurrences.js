function CountOfWord(sentence, word){
    sentence = sentence.split(' ');
    let count = 0;
    sentence.forEach(element => {
        if(element==word){
            count++;
        }
    });
    console.log(count);
}