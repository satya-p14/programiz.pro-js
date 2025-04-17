// findSecondLargest

function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    let first = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    const max = Math.max(...arr);
    const filtered = arr.filter(num => num !== max);
    if (filtered.length === 0) return null;
    return Math.max(...filtered);
}


var arr = [10, 20, 4];
console.log(findSecondLargest(arr));

