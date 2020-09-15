'use strict'
/*Banque*/
var BankMin = 16;
var BankMax = 21

function BankRandomScore() {
    return Math.floor(Math.random() * (BankMax - BankMin + 1)) + BankMin;;
}

// var ScoreBank = BankRandomScore();
// console.log(ScoreBank);


/*Joueur*/

var CardPlayerMin = 1;
var CardPlayerMax = 11;
function PlayerRandomCard() {
    return Math.floor(Math.random() * (CardPlayerMax - CardPlayerMin + 1)) + CardPlayerMin;;
}

// var CardPlayer = PlayerRandomCard();
// console.log(CardPlayer);



var prompt = require('prompt');

var ScoreBank = BankRandomScore();
var CardPlayer = PlayerRandomCard();
ScorePlayerInitial = 0;
var ScorePlayer = ScorePlayerInitial + CardPlayer; /*il faut integrer le score en bas*/



prompt.start();


function BlackJack() {


    prompt.get({ name: 'q', description: 'Card ?' }, function (
        err,
        result
    ) {
        if (result.q == 'yes') {
            return CardPlayer/*ici ajouter les conditions*//*ajouter var compte*/
            BlackJack();
        }

       

        if (ScorePlayer > BankMax) {
            console.log('Score bank' + ScoreBank + 'YOU LOOSE');
        } else if (ScorePlayer == BankMax) {
            console.log('BLACK JACK!!!!! YOU\'RE RICH!!!');
    
        } else if (ScorePlayer > ScoreBank) {
            console.log('Score bank' + ScoreBank + 'YOU WIN');
    
        } else if (ScorePlayer < ScoreBank) {
            console.log('Score bank' + ScoreBank + 'YOU LOOSE');
    
        } else if (ScorePlayer == ScoreBank) {
            console.log('Score bank' + ScoreBank + 'YOU LOOSE');
    
        }
        // console.log(result)
        // console.log(result.ScorePlayer)
    });
}



BlackJack();