var num = 2;
var power = 5;


function powerFunIter(num, power) {
    for (var i = 0; i < power; i++) {
        return num ** power;
    }
}

var resultat = powerFunIter(num, power)

console.log(resultat)