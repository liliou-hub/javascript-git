'use strict'

var date = new Date('2018-11-17');
// console.log(date);

function formatDate() {

    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

}

var result = formatDate(date);

console.log(formatDate(date));

