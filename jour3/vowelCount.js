'use strict'



function vowelCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'i' || str[i] == 'o' || str[i] == 'e' || str[i] == 'u' || str[i] == 'y') {
            count += 1;
        }
        console.log(count);
        return count;
    }
}
console.log(vowelCount('Les roses sont rouges'));