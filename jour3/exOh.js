'use strict'


// bolleen avec un objet console.log(obj.hasOwnProperty(' '))
// creer une boucle qui garde le compte pour chaque lettre
// vérifier s’ils sont égaux.



var str = 'xox';

function exOh(str) {


    var count1 = 0;
    var count2 = 0;

    for (var i = 0; i <= str.length; i++) {

        if (str[i] === 'x') {
            count1 += 1;
        } else if (str[i] === 'o') {
            count2 += 1;
        }
    
    }

    // console.log(str[i]);
    // count1 = count2 + i;

    if (count1 === count2) {
        return true;
    } else {
        return false;
    }


}


console.log(exOh(str))