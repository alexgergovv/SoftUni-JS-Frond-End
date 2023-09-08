function findWordsCount(array){
    let searched = array[0].split(' ');
    let counts = [];
    for (let i = 0; i < searched.length; i++) {
        let word = searched[i];
        let count = 0;
        for (let k = 1; k < array.length; k++) {
           if(array[k] == word){
            count++;
           }
        }
        counts.push({
            word,
            count: Number(count)
        })
    }
    let sorted = counts.sort((a, b) => b.count - a.count);

   sorted.forEach(w => {
   console.log(`${w.word} - ${w.count}`)
   });
}