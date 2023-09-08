function RevealWord(word, text){
    let array = word.split(', ');
    let textArray = text.split(' ');
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < textArray.length; k++) {
          if(array[i].length == textArray[k].length && textArray[k].includes("*")){
            textArray[k] = array[i];

          }
        }
    }
    console.log(textArray.join(' '));
}
RevealWord('great','softuni is ***** place for learning new programming languages')