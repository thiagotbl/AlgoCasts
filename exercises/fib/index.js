// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {}

    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }

        cache[args] = fn.apply(this, args)

        return cache[args]
    }
}

function fib(n) {
    if (n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib)

module.exports = fib;

// function fibonacci(n, memo) {
//     if (memo[n]) {
//         return memo[n]
//     }

//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

//     return memo[n]
// }

// function fib(n) {
//     const memo = {
//         0: 0,
//         1: 1,
//         2: 1
//     }

//     return fibonacci(n, memo)
// }

// function fib(n) {
//     const result = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         result[i] = result[i - 1] + result[i - 2]
//     }

//     return result[result.length - 1]
// }
