// NO.4

// let data = "kasur rusak"

// function checkPalindrom (str) {
//     return str == str.split("").reverse().join("");
//   }

//   if(checkPalindrom(data)) {
//       console.log('Palindrome');
//   } else {
//       console.log('Not Palindrome');
//   }





function checkPalindrome(word) {    
    let l = word.length;
    for (let i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
let word = "ka"

if (checkPalindrome(word)) {
    console.log("palindrome");
} else {
    console.log("Bukan palindrome");
}