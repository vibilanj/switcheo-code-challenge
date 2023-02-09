// Three ways to sum to n

// Provide 3 unique implementations of the following function.
// **Input**: `n` - any integer 
// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

// Iterative solution, O(n) time 
var sum_to_n_a = function(n) {
    if (n < 0) {
        console.assert(n >= 0, "n cannot be negative")
        return NaN
    }
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Recursive solution, O(n) time 
var sum_to_n_b = function(n) {
    if (n < 0) {
        console.assert(n >= 0, "n cannot be negative")
        return NaN
    }
    if (n === 0) {
        return 0;
    } else {
        return sum_to_n_b(n - 1) + n;
    }
};

// Numeric solution, O(1) time 
var sum_to_n_c = function(n) {
    if (n < 0) {
        console.assert(n >= 0, "n cannot be negative")
        return NaN
    }
    return (n * (n + 1)) / 2
};

// Unit tests
console.assert(sum_to_n_a(0) === 0, "First sum to n function is wrong")
console.assert(sum_to_n_a(1) === 1, "First sum to n function is wrong")
console.assert(sum_to_n_a(5) === 15, "First sum to n function is wrong")
console.assert(sum_to_n_a(10) === 55, "First sum to n function is wrong")

console.assert(sum_to_n_b(0) === 0, "Second sum to n function is wrong")
console.assert(sum_to_n_b(1) === 1, "Second sum to n function is wrong")
console.assert(sum_to_n_b(5) === 15, "Second sum to n function is wrong")
console.assert(sum_to_n_b(10) === 55, "Second sum to n function is wrong")

console.assert(sum_to_n_c(0) === 0, "Third sum to n function is wrong")
console.assert(sum_to_n_c(1) === 1, "Third sum to n function is wrong")
console.assert(sum_to_n_c(5) === 15, "Third sum to n function is wrong")
console.assert(sum_to_n_c(10) === 55, "Third sum to n function is wrong")