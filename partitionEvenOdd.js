// partitionEvenOdd

function partitionEvenOdd(arr) {
    var even = [];
    var odd = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element % 2 == 0) {
            even.push(element);
        } else {
            odd.push(element);
        }
    }    
    return [even, odd];

}


var arr = [11, 20, 3, 40, 15];
console.log(partitionEvenOdd(arr));
//[[24,40],[11,3,15]]
