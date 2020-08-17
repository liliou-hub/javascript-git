var first = 25;
var second = 30;


function swap(first, second) {
    var aux1;

    aux1 = first;
    first = second;
    second = aux1;

    return [first, second];

}

console.log(swap(first, second));