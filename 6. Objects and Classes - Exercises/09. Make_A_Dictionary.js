function printDictionary(input){
    let dictionary = input
    .map((jsonString) => JSON.parse(jsonString))
    .reduce((acc, curr) => {
        return{
            ...acc,
            ...curr,
        }
    }, {});
    let sorted = Object.keys(dictionary).sort();
  sorted.forEach((term) => {
          console.log(`Term: ${term} => Definition: ${dictionary[term]}`)
  });
}