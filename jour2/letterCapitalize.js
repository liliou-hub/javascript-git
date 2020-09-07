var sentence = 'bring your umbrella';
var stn = sentence.split(" ");
// console.log(stn);



function letterCapitalize(test) {


    for (var i = 0; i <= stn.length - 1; i++) {

        stn[i].charAt(0).toUpperCase();

        var mot = stn[i];
        mot.substr(1, sentence.length);

        let one = stn[i].charAt(0).toUpperCase();
        let two = mot.substr(1, sentence.length);
        let joined = one + two; joined;

        // console.log(joined);

        stn[i] = joined;
    }

    total = stn.join(' ');
    return total
}

console.log(letterCapitalize(stn));
