// convertToPascalCase

function convertToPascalCase(str) {
    return str
    .match(/[a-zA-Z0-9]+/g) 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}


function convertToPascalCase(str) {
    return (str.split(" ")
            .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
            .join(""));
}

var str = "hello world";
console.log(convertToPascalCase(str));// HelloWorld
