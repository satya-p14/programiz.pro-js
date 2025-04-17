 // findFirstAndLast
// function to find the first and last index of a given number in an array

function findFirstAndLast(arr, num) {
    let firstIndex = -1;
    let lastIndex = -1;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === num) {
            if (firstIndex === -1) {
                firstIndex = index;
            }
            lastIndex = index;
        }
    }
    return [firstIndex,lastIndex]
}

function findFirstAndLast(arr, num) {
    return [arr.indexOf(num), arr.lastIndexOf(num)];
}

var arr = [5, 13, 14, 13, 14, 13, 15];
var num = 13;
console.log(findFirstAndLast(arr, num));
