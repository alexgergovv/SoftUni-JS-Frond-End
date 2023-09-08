function lockedProfile() {
    let array = Array.from(document.getElementsByClassName('profile'));
    for (let i = 0; i < array.length; i++) {
        let id = "";
        if(i == 0){
            id = '#user1HiddenFields';
        }
        else if(i ==1){
            id = '#user2HiddenFields';
        }
        else{
            id = '#user3HiddenFields';
        }
        //unlocked
        let unlocked = array[i].querySelector('input[value=unlock]');
        unlocked.addEventListener('click', (e)=> {
            let button = array[i].querySelector('button');
                //show more//
                button.addEventListener('click', (e) => {
                if(button.textContent == "Show more")
                {
                    button.textContent = 'Hide it';
                    let div = array[i].querySelector(id);
                    div.style.display = 'block';
                }
                else{
                    button.textContent = 'Show more';
                    let div = array[i].querySelector(id);
                    div.style.display = 'none';
                }
                })
        })
          //locked
          let locked = array[i].querySelector('input[value=lock]');
          locked.addEventListener('click', (e)=> {
              let button = array[i].querySelector('button');
              button.textContent = 'Show more';
              let div = array[i].querySelector(id);
              div.style.display = 'none';
          })
    }
}