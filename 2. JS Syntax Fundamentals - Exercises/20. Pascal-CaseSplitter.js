function SplitWords(text){
    let separatedText = text.split(/(?=[A-Z])/);
    console.log(separatedText.join(', '));
}