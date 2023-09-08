function createInventory(array){
    let heroes = [];
    for (let line of array) {
        let [heroName, heroLevel, heroItems] = line.split(' / ');
        let hero = {
            heroName,
            heroLevel,
            heroItems
        }
        heroes.push(hero);
    }
   let sorted = heroes.sort((a, b) => a.heroLevel - b.heroLevel);
   sorted.forEach(hero => {
    console.log(`Hero: ${hero.heroName}\nlevel => ${hero.heroLevel}\nitems => ${hero.heroItems}`)
   });
}