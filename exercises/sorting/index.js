// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const aux = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = aux
            }
        }
    }

    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }

        if (indexOfMin !== i) {
            const aux = arr[i]
            arr[i] = arr[indexOfMin]
            arr[indexOfMin] = aux
        }
    }

    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const rigth = arr.slice(center)

    return merge(mergeSort(left), mergeSort(rigth))
}

function merge(left, right) {
    const result = []

    while (left.length && right.length) {
        const arr = left[0] < right[0] ? left : right

        result.push(arr.shift())
    }

    result.push(...left)
    result.push(...right)

    return result
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
