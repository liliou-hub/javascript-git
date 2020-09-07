var prompt = require(' prompt ');

//
//  Démarre l'invite
//
invite.start();

//
//  Obtient deux propriétés de l'utilisateur: nom d'utilisateur et email
//
invite.get([' username ', ' email '], function (err, result) {
  //
  //  Enregistre les résultats.
  //
  console.log(' Entrée de ligne de commande reçue: ');
  console.log('   nom d' utilisateur: ' + résultat . nom d'utilisateur);
  console.log('   email:  ' + résultat.email);
});