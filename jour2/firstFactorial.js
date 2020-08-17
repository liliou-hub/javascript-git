var num = 8;


function firstFactorial(x) {
    var total = 1;


    for (var i = 1; i <= x; i++) {

        total *= i;
    }

    return total
}
console.log(firstFactorial(num));
