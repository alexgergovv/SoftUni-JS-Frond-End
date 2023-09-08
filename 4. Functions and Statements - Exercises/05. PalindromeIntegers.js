function isPalindrome(array){
    for (let i = 0; i < array.length; i++) {
        let palindrome = true;
        let charArray = Array.from(String(array[i], Number));
       for (let k = 0; k <= charArray.length/2; k++) {
            if(charArray[k] != charArray[charArray.length - k -1]){
                palindrome = false;
            }
       }
       console.log(palindrome);
    }
}