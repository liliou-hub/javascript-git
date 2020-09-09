'use strict'

// var dateOfBirth = new Date("January 13, 1980 11:20:00");
// // console.log(dateOfBirth.toString());

// // var date = new Date('January 31, 1980 11:20:00');
// // console.log(date);

// // //Notation classique
// // var timestamp = Math.round(new Date().getTime() / 1000);
// // //Notation courte
// // var timestamp = Math.round(+new Date() / 1000);

// // console.log(timestamp)

// var dateOfBirth = new Date("January 13, 1980 11:20:00");
// var date = new Date();

// // var timestamp = date.getTime();
// console.log(date);



function formatDate(date) { 
    var timestamp= date.getTime()
    var diff = Date.now() - timestamp;
    var age = new Date(diff); 
  
    return Math.abs(age.getUTCFullYear() - 1970);
}

console.log(formatDate(new Date(1985, 11, 7)));

