'use strict'
var str = 'abc';


function rot13(str) {
    //     // var result = ''
    //     // for (var i = 0; i < str.length; i++) {
    //     //     // console.log(str[i]);
    //     //     result += String.fromCharCode(str.charCodeAt(i) + 13)
    //     // }
    var result = '';
    var minmaj=65
    var maxmaj=90

    for (var i = 0; i < str.length; i++) {

        var strchar = str.charCodeAt(i);

        if (strchar >= minmaj && strchar <= maxmaj) {

             String.fromCharCode(strchar + 13);

        } else if(String.fromCharCode(strchar + 13) > maxmaj) {

             String.fromCharCode(strchar + 13) - 26;
        }


        // result +=String.fromCharCode(strchar + 13)-26; 

        
    }
    return result
}

console.log(rot13('AbcZ'))
// // String.fromCharCode( str.charCodeAt(i) + 13 )


// var str = 'abc';

// function rot13(str) {
//     // var result = ''
//     // for (var i = 0; i < str.length; i++) {
//     //     // console.log(str[i]);
//     //     result += String.fromCharCode(str.charCodeAt(i) + 13)
//     // }
//     var result = ''
//     var pattern1= /([A-Z])\w+/g;
//     var pattern2= /([a-z])\w+/g;

//     for (var i = 0; i < str.length; i++) {

//         if(/([a-z])\w+/g){
//             str.replace(/([a-z])\w+/g, String.fromCharCode(str.charCodeAt(i) + 13))

//         }else if (/[A-Z])\w+/g){
//             str.replace(/([A-Z])\w+/g, String.fromCharCode(str.charCodeAt(i) + 13))

//         }


//     }


// }

// console.log(rot13('AbcZ'))