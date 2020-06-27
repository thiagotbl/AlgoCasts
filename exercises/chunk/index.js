// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = []
    let i = 0

    while (i < array.length) {
        chunked.push(array.slice(i, i + size))

        i += size
    }

    return chunked
}

module.exports = chunk;

// function chunk(array, size) {
//     const response = []
//     let chunk = []

//     for (let i = 0; i < array.length; i++) {
//         if (chunk.length === size) {
//             response.push(chunk)
//             chunk = []
//         }

//         chunk.push(array[i])
//     }

//     response.push(chunk)

//     return response
// }
