function createSongList(input){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time= time;
        }
    }
    let songs = [];
    let songCount = input[0];
    let type = input[input.length - 1];
    for (let i = 1; i < input.length - 1; i++) {
        let [typeList, name, time] = input[i].split('_');
        songs.push(new Song(typeList, name, time));
    }
    if(type == 'all'){
        for (const song of songs) {
            console.log(song.name);
        }
    }
    else{
        for (const song of songs) {
            if(song.typeList == type){
                console.log(song.name);
            }
        }
    }

}