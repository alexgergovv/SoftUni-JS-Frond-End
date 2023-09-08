function createMeetings(input){
    let meeting = {};
    for (const line of input) {
        let info = line.split(' ');
        let day = info[0];
        let name = info[1];
        if (meeting.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        }
        else{
            meeting[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }
   for (const key in meeting) {
    console.log(`${key} -> ${meeting[key]}`)
   }
}