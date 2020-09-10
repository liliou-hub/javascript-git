'use strict'

function letterCapitalizeRegex() {

    var str = "what a wonderful world";

    var word = str.match(/\b[a-z]/g,);

    return word;
}

var newWord = letterCapitalizeRegex(toUpperCase())

console.log(newWord);


