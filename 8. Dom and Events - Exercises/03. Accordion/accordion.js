function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let details = document.getElementById('extra');
    if(details.style.display == 'block'){
        button.textContent = 'More';
        details.style.display = 'none';
    }
    else{
        button.textContent = 'Less';
        details.style.display = 'block';
    }
    
}