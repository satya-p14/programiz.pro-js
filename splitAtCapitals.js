// Write a function to split a string at each occurrence of a capital letter.

function splitAtCapitals(str) {
    return str.split(/(?=[A-Z])/);    
}


function splitAtSmalls(str) {
    return str.split(/(?=[a-z])/);    
}

var input = "SplittingStringsOnCapitalLetters";
console.log(splitAtCapitals(input)); // ['Splitting', 'Strings', 'On', 'Capital', 'Letters']
