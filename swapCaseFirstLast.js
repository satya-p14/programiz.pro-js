// Write a function that swaps the case of the first and last characters of each word in a string in javascript .

function swapCaseFirstLast(str) {
    return str.split(' ').map(word => {
        if (word.length === 1) {            
            const char = word[0];
            return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
        }
        const first = word[0];
        const last = word[word.length - 1];
        const middle = word.slice(1, -1);
        const swappedFirst = first === first.toLowerCase() ? first.toUpperCase() : first.toLowerCase();
        const swappedLast = last === last.toLowerCase() ? last.toUpperCase() : last.toLowerCase();
        return swappedFirst + middle + swappedLast;
    }).join(' ');
}

function swapCaseFirstLast(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word.length === 1) {
            arr[i] = word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
        } else {
            let firstChar = word[0];
            let lastChar = word[word.length - 1];
            firstChar = firstChar === firstChar.toUpperCase()
                ? firstChar.toLowerCase() : firstChar.toUpperCase();
            lastChar = lastChar === lastChar.toUpperCase()
                ? lastChar.toLowerCase() : lastChar.toUpperCase();
            arr[i] = firstChar + word.slice(1, -1) + lastChar;
        }
    }
    return arr.join(' ');
}

var input = "Hello World";

console.log(swapCaseFirstLast(input)); // hellO worlD
