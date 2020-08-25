'use strict'
var str = 'abc';

function rot13(str) {
    // var result = ''
    // for (var i = 0; i < str.length; i++) {
    //     // console.log(str[i]);
    //     result += String.fromCharCode(str.charCodeAt(i) + 13)
    // }
    var result = ''
    
    // var comptmin = 65
    // var comptemax = 90
    for (var i = 0; i < str.length; i++) {

        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {

            // String.fromCharCode(str.charCodeAt(i) + 13)

        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            // String.fromCharCode(str.charCodeAt(i) + 13)
        } else  ((String.fromCharCode(str.charCodeAt(i) + 13)) > 90 && (String.fromCharCode(str.charCodeAt(i) + 13)) > 122){


            result += String.fromCharCode(str.charCodeAt(i) + 13)-26
        
        }
        

    return result
    }

}

console.log(rot13('AbcZ'))
// String.fromCharCode( str.charCodeAt(i) + 13 )