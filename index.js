//making a function to divide to number and find a remainder
function divideandremainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideandremainder(20, 6));
