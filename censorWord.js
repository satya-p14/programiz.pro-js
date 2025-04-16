// censorWord

function censorWord(sentence, word) {
    const censor = '*'.repeat(word.length);
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    return sentence.replace(regex, censor);
}

function censorWord(sentence, word) {
    let censor = word.split('').map(w => w = '*').join('');
    return sentence.replace(word, censor);
}

// var sentence = "This is a test.";
var sentence = "Apple Banana Mango.";
var word = "Mango";


console.log(censorWord(sentence, word)); // // Output: "Apple Banana *****."
