'use strict'

// function passwordGen2(num) {
//     var min = 65;
//     var max = 90;
//     var password = '';

//     if (num > 15) {
//         return 'trop grand';
//     }
//     if (num < 6) {
//         return 'trop petit';
//     }

//     for (var i = 0; i < num; i++) {
//         var index = Math.floor((Math.random() * (max - min) + min));
//         password = password + String.fromCharCode(index);
//     }
    
//     return password;
// }
// ​
// ​
// console.log(passwordGen2(8));