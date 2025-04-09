function doubleCharacterSwap(str, c1, c2) {    
    let result = '';
    for (let char of str) {
        if (char === c1) {
            result += c2;
        } else if (char === c2) {
            result += c1;
        } else {
            result += char;
        }
    }
    return result;
}


function doubleCharacterSwap(str, c1, c2) {
    let tempArr = str.split("");
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] == c1) {
            tempArr[i] = c2;
        }
        else if (tempArr[i] == c2) {
            tempArr[i] = c1;
        }
    }
    return tempArr.join("");
}

var input = 'aabbcc';
console.log(doubleCharacterSwap(input, 'a', 'c')); //ans :  ccbbaa

