'use strict'

// transformer la string en array
// creer une boucle qui parcours la longueur de la liste
// creer qqchose pour avoir tous les indexes des lettres recherchees
// comment compter le nombre d'elements dans un tableau




var str = 'Hello apple pie';
var str2 = str.split("");
//  console.log(str2) 

var search = 'o';


// function letterCount(str, search) {

// for (var i = 0; i > str2.lenght; i++) {
var indices = []
var index = str2.indexOf(search);
while (index != -1) {
    indices.push(index);
    index = str2.indexOf(search, index + 1);
}

// console.log(indices);
console.log(indices.length);

//      return indices;
//  }

//  console.log(indices);
//  console.log(indices.lenght);