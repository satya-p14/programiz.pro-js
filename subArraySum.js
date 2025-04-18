// subArraySum 
// sum of all subarray of an array

function subArraySum(arr) {
    var sum = 0;
    var n = arr.length;
    for (let i = 0; i < n; i++) {
        const element = arr[i];
        sum += element * (i + 1) * (n - i);
    }
    return sum;
}

function subArraySum(arr) {
    let n = arr.length;
    return arr.reduce((sum, e, i) => sum + e * (i + 1) * (n - i), 0);
}

var arr = [1, 2, 3];
console.log(subArraySum(arr)); // 20

