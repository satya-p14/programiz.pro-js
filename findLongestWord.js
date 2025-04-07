// Find  first longest word from given sentence

function findLongestWord(sentence) {
    const mp = new Map();
    const StrArr = sentence.split(" ");
    for (let i = 0; i < StrArr.length; i++) {
        mp.set(StrArr[i], StrArr[i].length);
    }
    const max = Math.max(...mp.values());    
    return  [...mp].find(([key , value]) => value === max)[0];  

    // var newWord = sentence.split(' ').sort((a, b) => b.length - a.length);
    // return newWord[0];
}

var input = "The quick brown fox jumps over the lazy dog";
console.log(findLongestWord(input)); // quick
