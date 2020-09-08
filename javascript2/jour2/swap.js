var first = 123
var second = 456
var third=null;

function swapeCase(first, second) {

    third = first;

    first = second;

    second = third;

    return [first, second]
}

console.log(swapeCase(first, second));

