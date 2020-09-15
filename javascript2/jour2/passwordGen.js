function passwordGen(num) {
    var min = 65;
    var max = 90;
    var password = '';

    if (6 < num < 15) {/*pas possible*/
        return 'error';
    }

    for (var i = 0; i < num; i++) {
        var index = Math.floor((Math.random() * (max - min) + min));
        password = password + String.fromCharCode(index);
    }

    return password;
}
console.log(passwordGen(26));
console.log(passwordGen(9));
