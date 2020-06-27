// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = str.split('')
    const charsMap = {}
    let mostCommonChar = str[0]

    chars.forEach(c => {
        if (charsMap[c]) {
            charsMap[c] += 1
        } else {
            charsMap[c] = 1
        }
    })

    Object.keys(charsMap).forEach(k => {
        if (charsMap[k] > charsMap[mostCommonChar]) {
            mostCommonChar = k
        }
    })

    return mostCommonChar
}

module.exports = maxChar;
