// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reverse().join('')

    return str === reversed
}

module.exports = palindrome;

// function palindrome(str) {
//     const chars = str.split('')
//     const middle = Math.floor(chars.length / 2)

//     for (let i = 0; i <= middle; i++) {
//         if (chars[i] !== chars[chars.length - 1 - i]) {
//             return false
//         }
//     }

//     return true
// }
