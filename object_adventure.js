// Challenge 1 --------------------------------------------------
​
// Creez un object 'voiture' qui à 3 attributs
// Ces attributs sont :
// - marque => string
// - modele => Objet => 2 attributs 'a' et 'b' qui ont pour valeur des strings
// - annee => Date => 2015-08-08 || number
​
// Afficher l'objet voiture, puis afficher juste la marque de la voiture
// Bonus: Utilisez les deux syntaxes possible
​

// /* Challenge 1*/

// var voiture = {
//     'marque': 'ford',
//     'modele': {
//         a: 'ford',
//         b: 'C-max'
//     },
//     'année': 2005
// };
// console.log(voiture);
// console.log(voiture.marque);
// console.log(voiture['marque']);



// Challenge 2 --------------------------------------------------
// Prenez le même objet que precedemment 
// et ajouter à l'attribut modèle un elèment 'c' qui est une string
​
// Afficher l'objet voiture, puis afficher la valeur 'c' qui se trouve dans le modèle


// var voiture = {
//     'marque': 'ford',
//     'modele': {
//         a: 'ford',
//         b: 'C-max',
//         c:'autre attribut modele'
//     },
//     'année': 2005
// };
// voiture.modele.c

// console.log(voiture[index]);
// console.log(modele[index2]);

// Challenge 3 --------------------------------------------------
// Prenez le même objet que precedemment 
// Ajouter un attribut à voiture qui s'appelle 'pneu'. C'est un array avec 4 chiffres dedans
// Pour chaque chiffre de l'array 'pneu' ajouter 2 à sa valeur avec la fonction map

var voiture = {
    'marque': 'ford',
    'modele': {
        a: 'ford',
        b: 'C-max'
    },
    'année': 2005,
    'pneu':[1,2,3,4]
};


var pneu=[1,2,3,4];
var pneu2= pneu.map(function(nb){
    return nb+2
});

console.log(pneu2)





// Challenge 4 --------------------------------------------------
// Prenez le challenge 3 et afficher les valeurs de l'attribut 'pneu' de l'obj 'voiture' une par une avec une boucle for

var voiture = {
    'marque': 'ford',
    'modele': {
        a: 'ford',
        b: 'C-max'
    },
    'année': 2005,
    'pneu':[1,2,3,4]
};



for (var i=0; i>pneu.lenght, i++){
    return pneu
}

console.log(pneu)


// / Challenge 5 
// Ajouter un nouvelle attribut drive à l'objet 'voiture' de type fonction qui renvoie un string disant 
// 'Je conduit une voiture de marque' + le nom de la marque de la voiture