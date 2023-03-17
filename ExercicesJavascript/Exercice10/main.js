let email = "contact@teamjs.fr";
let mdp = "leLundiAuSoleil";

let emailSaisi = prompt("Entrez votre email :");
let mdpSaisi = prompt("Entrez votre mot de passe :");

if (emailSaisi === email && mdpSaisi === mdp) {
  console.log("Bienvenue dans votre espace sécurisé");
} else {
  console.log("accès refuserr");
}
