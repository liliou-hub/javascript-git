// var arr = [1, 42, 42, 180];
// var sorted = arr.sort();
// console.log(sorted);

// var small2 = parseInt(process.argv[arrOrdre[i + 1]])
// var big2 = parseInt(process.argv[arrOrdre[i - 1]])

var test = [1, 42, 42, 180];

function secondGreatLow(arr) {
    //verif start
    if (arr.length <2) {
        return "l'array doit contenir au moins deux nombres"
    }

    //condition && action
    //condition ? yes action : no action


    //logique de tri
    function compare(x, y) {
        return x - y;
    }

    //array rangé
    var arrOrdre = arr.sort(compare);
    // console.log(arrOrdre)
    //[1, 42, 42, 180, 300]

    //trouver petit
    var small2 = null;
    for (i = 0; i < arrOrdre.length; i++) {
        if (arrOrdre[i] < arrOrdre[i + 1]) {
            small2 = arrOrdre[i + 1]
            break;
        }
    }

    //trouver grand
    var big2 = null;
    for (i = arrOrdre.length; i >0 ; i--) {
        if (arrOrdre[i] > arrOrdre[i - 1]) {
            big2 = arrOrdre[i - 1]
            break;
        }
    }

    return `petit = ${small2}  // grand = ${big2} `


}

console.log(secondGreatLow(test));
// console.log([small2, big2])
