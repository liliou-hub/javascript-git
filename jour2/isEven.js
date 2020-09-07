var num = 6

// function isEven(num) {
//     if (num % 2 == 0) {
//         console.log('true');
//     }
//     else {
//         console.log('false');
//     }
// }

// isEven(num)

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log('3 is even?', isEven(3));
console.log('2 is even?', isEven(2));
console.log('18090 is even?', isEven(18090));
console.log('18095 is even?', isEven(18095));
