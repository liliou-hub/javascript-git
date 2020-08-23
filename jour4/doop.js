// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);

// console.log(parseInt(process.argv[2], 10));
// console.log(process.argv[3]);
// console.log(parseInt(process.argv[4], 10));

function doop(param1, param2, param3) {
    var param1 = (parsInt(process.argv[2]))
    var param2 = (process.argv[3])
    var param3 = (parsInt(process.argv[4]))
    var operator = param2
    // console.log();
    switch (operator) {
      case '+':
        console.log('param1','param2', 'param3');    // Addition
      break;
      case '-':
        console.log(param1,param2,param3);  // Soustraction
      break;
      case '*':
        console.log(param1,param2,param3);  // Multplication
      break;
      case '/':
        console.log(param1,param2,param3);  // Division
      break;
      case (doop.length !== 3):
        console.log("error");  // Si le nombre de paramètres différent de 3= error
      break;
      default:
        console.log("not rated");  // Instructions à exécuter lorsqu'aucune des valeurs ne correspond pas
    }
  }
  // console.log(doop(parsInt(process.argv[2]),(process.argv[3]),parsInt(process.argv[4])))

//   console.log(doop(parsInt(process.argv[2]) + parsInt(process.argv[4])))
  