// validatePostalCode

 function validatePostalCode(postalCode) {
    const postalCodePattern = /^[1-9][0-9]{5}$/;
    let flag = postalCodePattern.test(postalCode);
    return flag ? 'Valid' : 'Invalid';
}

function validatePostalCode(postalCode) {
    if (postalCode.toString().length > 6) {
        return "Invalid";
    }
    const arr = postalCode.toString().split("");
    const nums = "0123456789";
    for (let i = 0; i < arr.length; i++) {
        if ((i === 0 && arr[i] === 0) || !nums.includes(arr[i])) {
            return "Invalid";
        }
    }
    return "Valid";
}

console.log(validatePostalCode("560001")); 
console.log(validatePostalCode("012345")); 
console.log(validatePostalCode("56A001")); 
console.log(validatePostalCode("56001"));
