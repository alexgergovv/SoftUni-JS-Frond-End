function ValidatePassword(password){
    const array = Array.from(String(password), String);
    let countDigits = 0;
    let countLetter = 0;
    let specials = false;
    let valid = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i].charCodeAt(0) >= "0".charCodeAt(0) && array[i].charCodeAt(0) <= "9".charCodeAt(0)) {
            countDigits++;
        }
        else if(array[i].toLowerCase() != array[i].toUpperCase()){
            countLetter++;
        }
        else{
            specials = true;
        }
    }
    if (array.length <6 || array.length >10) {
        console.log("Password must be between 6 and 10 characters");
        valid = false;
    }
    if (specials) {
        console.log("Password must consist only of letters and digits");
        valid = false;
    }
    if (countDigits<2) {
        console.log("Password must have at least 2 digits");
        valid = false;
    }
    if(valid){
        console.log("Password is valid");
    }
}