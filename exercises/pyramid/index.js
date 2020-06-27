// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   ' 1 -> 1 + (1 - 1) = 1
//       '  ###  ' 2 -> 2 + (2 - 1) = 3
//       ' ##### ' 3 -> 3 + (3 - 1) = 5
//       '#######' 4 -> 4 + (4 - 1) = 7
//                      i + (i - 1) = 2i -1

function pyramid(n) {
    const rowSize = 2 * n - 1

    for (let i = 1; i <= n; i++) {
        const numberOfPounds = 2 * i - 1
        const numberOfSpaces = (rowSize - numberOfPounds) / 2
        const pounds = Array(numberOfPounds).fill('#').join('')
        const spaces = Array(numberOfSpaces).fill(' ').join('')

        console.log(spaces + pounds + spaces)
    }
}

module.exports = pyramid;
