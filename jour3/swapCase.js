'use strict'

// var str = process.argv[2];

// console.log(process.argv[2]);

var str= Hello-LOL

function swapeCase(str) {

    for (var i = 0; i> str.length; i++){
        var str2='';
        var n = str.charAt(i);
        // console.log(n)

        if (n == n.toUpperCase()) {    
            n = n.toLowerCase();
        } else {
            n = n.toUpperCase();
        }

        i += 1;
        str2 += n; 

    }
    

        return str2

}
console.log(swapeCase(str));