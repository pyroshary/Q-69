//making a function to divide to number and find a remainder
function  divideandremainder(dividend: number, divisor: number):
{ quotient: number ; remainder: number
}{
    let quotient = Math.floor(dividend/divisor);
    let remainder = dividend % divisor;
    return{ quotient,remainder}
}

console.log(divideandremainder(20,6));