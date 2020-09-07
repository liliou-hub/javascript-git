
var num = 12;


function simpleAdding(x) {
    var total = 0;


    for (var i = 1; i <= x; i++) {
        // return ((num * (num + i)) / 2);
        total += i;
    }

    return total
}
console.log(simpleAdding(num));





// var valeurInitiale = 0;
// var num = 12

// var somme = [{ num: num - 11 },
// { num: num - 10 },
// { num: num - 9 },
// { num: num - 8 },
// { num: num - 7 },
// { num: num - 6 },
// { num: num - 5 },
// { num: num - 4 },
// { num: num - 3 },
// { num: num - 2 },
// { num: num - 1 },
// { num: num - 0 }].reduce(function (accumulateur, valeurCourante) {
//     return accumulateur + valeurCourante.num;
// }, valeurInitiale);

// console.log(somme); 