// // on a transformé l'array en string
// // on a separé tous les elements de la string 
// // on les a mappé et "reverser" dans un array
// // on a reussi a inverser les lettres
// // PROBLEME: lorsque on a retransformé la string en array on arrive pas a "reverser" les elements du tableau







// var arr = ['pan', 'top', 'pal', 'tool'];
// var arr1 = arr.join()
// var arr2 = arr1.split('')

// // console.log(arr1);
// // console.log(arr2);



// var arr3 = arr2.reverse(function (ana) {
//     return ana;
// });

// // console.log(arr3)

// var arr4 = arr3.join('')

// // console.log(arr4);

// var arr5 = arr4.split(' ');
// arr.reverse()

// console.log(arr5)
// console.log(arr5.reverse())

// RAKY

var  arr = ['pan', 'top', 'pal', 'tool']
var arr2 = arr.map(function(elem) {
    return elem.split('').reverse().join('');
})
console.log(arr2)













