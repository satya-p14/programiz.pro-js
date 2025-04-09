function findFirstNonRepeatedCharacter(str) {
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
    return char ? char[0] : null;
}

function findFirstNonRepeatedCharacter(str) {
    for(let i = 0; i<str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i];
        }
    }
}


var input = 'interview';
console.log(findFirstNonRepeatedCharacter(input)); // n
