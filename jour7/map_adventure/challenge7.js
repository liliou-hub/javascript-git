var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]


var arr2 = arr.map(function (arr) {

    var result = { fullName: arr.firstName + ' ' + arr.surname }
    return result
});

console.log(arr2)