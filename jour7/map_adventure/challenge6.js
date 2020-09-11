var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]


var arr2 = arr.map(function (arr) {
    return arr.firstName + ' ' + arr.surname
});

console.log(arr2)



