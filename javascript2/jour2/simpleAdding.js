var num = 140

function simpleAdding(num) {
    var index = 0;

    for (var i = 1; i <= num; i++) {
        index = index + i;
    }

    return index;

}
console.log(simpleAdding(num));
