'use strict'

function alphabetSoup(str) {

    var x = ' ';

    for (var i = str.lenght - 1; i >= 0; i--) {
        x += str[i];
    }
    return x;
}

console.log(alphabetSoup('konexio'));