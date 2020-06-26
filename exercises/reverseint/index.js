// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const sign = n < 0 ? -1 : 1
    const reversed = Math.abs(n).toString().split('').reverse().join('')

    return sign * reversed
}

module.exports = reverseInt;

// function reverseInt(n) {
//     const digits = String(n).split('')
//     const firstDigit = digits[0]
//     const reversedDigits = digits.splice(1).reverse().join('')

//     let response

//     if (firstDigit === '-') {
//         response = firstDigit + reversedDigits
//     } else {
//         response = reversedDigits + firstDigit
//     }

//     return Number(response)
// }
