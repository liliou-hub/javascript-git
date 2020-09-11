'use strict'

// 1. je parcours la string avec "match" pour récupérer les premiers caractères de chaque mot grace au pattern
// 2. je tranforme chaque premier caractère isolé en majuscule grâce à UpperToCase  
// 3. je recrée chaque mot de la string grâce à "join" ou à la concaténation
​
// OU
​
// 1. je parcours la string avec "replace" pour remplacer tous les premiers caractères par leur majuscule
​
​
​
​
// function letterCapitalizeRegex(str) {
    var str = "what a wonderful world";
    //   console.log(word);
    var word = str.replace(/\b[a-z]/g, function(param){
        return (/\b[A-Z]/g)

    });
​
   
​

​
console.log(word)