// sharedDigits 
// Write a function to find the common digits between two numbers in javascript

function sharedDigits(num1, num2) {
    const a = new Set(num1.toString().split(''));
    const b = new Set(num2.toString().split(''));
    const commonDigits = [...a].filter(x => b.has(x));  
    return (commonDigits && commonDigits.length == 0) ? " " : commonDigits.join('');
}

function sharedDigits(num1, num2) {
    return [...String(num1)].filter((x)=>String(num2).includes(x)).join('') || ' ';
}
