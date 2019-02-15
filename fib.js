// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // 0 will return 0 
    // 1 will return 1, which are the first 2 vals in the sequence
    if (n <= 1){
        return n
    }
    // sum of (preceding two numbers in the ffib sequence)
    return fib(n-2) + fib(n-1);
}