// findLargestPrimeNumber in array

function findLargestPrimeNumber(arr) {
    let maxPrime = null;
    for (let num of arr) {
        if (isPrime(num) && num > maxPrime) {
            maxPrime = num;
        }
    }
    return maxPrime;
}

function findLargestPrimeNumber(arr) {
    const tmp = arr.filter(x => isPrime(x));    
    return (tmp && tmp.length != 0 )? Math.max(...tmp) : null;
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

var arr = [1, 5, -7, 12, 7];
console.log(findLargestPrimeNumber(arr));

