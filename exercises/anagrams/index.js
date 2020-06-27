// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const arrA = stringA.toLowerCase().split('').sort().join('')
    const arrB = stringB.toLowerCase().split('').sort().join('')

    return arrA == arrB
}

module.exports = anagrams;


// function charMap(string) {
//     const map = {}

//     string.toLowerCase().split('').forEach(element => {
//         if (map[element]) {
//             map[element]++
//         } else {
//             map[element] = 1
//         }
//     })

//     return map
// }

// function anagrams(stringA, stringB) {
//     mapA = charMap(stringA)
//     mapB = charMap(stringB)

//     const sameChars = Object.keys(mapA).length === Object.keys(mapB).length

//     return sameChars &&
//         Object.keys(mapA).every((k) => mapA[k] === mapB[k])
// }
