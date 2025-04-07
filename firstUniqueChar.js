// firstUniqueChar
// Write a function to find the first non-repeating character in a string and return its index.

function firstUniqueChar(str) {
    const mp = new Map();
    str = str.toLowerCase();
    const StrArr = str.split('');
    for (let i = 0; i < StrArr.length; i++) {
        if (!mp.has(StrArr[i])) {
            mp.set(StrArr[i], 1);
        } else {
            mp.set(StrArr[i], mp.get(StrArr[i]) + 1);
        }
    }    
    const char = [...mp].find(([key, value]) => value === 1);
    return char ? str.indexOf(char[0]) : -1;
}

