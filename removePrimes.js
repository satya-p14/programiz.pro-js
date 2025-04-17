// removePrimes 
// remove all prime number from array

function removePrimes(arr) {
    return arr.filter(num => !isPrime(num));
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

var arr = [2, 3, 4, 6, 8];
console.log(removePrimes(arr));
