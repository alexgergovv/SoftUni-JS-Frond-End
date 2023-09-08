function FindWordWithHashTag(text){
    let textArray = text.split(' ');
    for (let i = 0; i < textArray.length; i++) {
        if(textArray[i] != "#"){
            if(textArray[i].substring(0, 1)== "#"){
                	console.log(textArray[i].substring(1,textArray[i].length));
            }
        }
    }
}
FindWordWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');