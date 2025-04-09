// calculateMaxValue
// Write a function to calculate the maximum value that's possible either through addition or multiplication.

function calculateMaxValue(str) {    
    var strArr = str.split('').map(Number);
    let mul = 0;
    let add = 0;

    mul = strArr.reduce((total, initValue) => {
        return total * initValue;
    }, 1);

    add = strArr.reduce((total, initValue) => {
        return total + initValue;
    }, 0);
 
    return Math.max(mul, add);
}

var input = '631';
console.log(calculateMaxValue(input)); //  18
