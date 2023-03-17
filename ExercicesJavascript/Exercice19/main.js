let taille = parseInt(prompt("Quelle est votre taille en cm ?"));
let poids = parseInt(prompt("Quel est votre poids en kg ?"));

let tailleVetement;

// switch (true) {
//   case taille <= 145 && poids <= 43:
//     tailleVetement = 1;
//     break;
//   case taille <= 169 && poids <= 65:
//     tailleVetement = 1;
//     break;
//   case taille >= 160 && poids >= 48:
//     tailleVetement = 2;
//     break;
//   case taille <= 178 && poids <= 71:
//     tailleVetement = 2;
//     break;
//   case taille > 163 && poids > 54:
//     tailleVetement = 3;
//     break;
//   default:
//     tailleVetement = "inconnue";
// }

switch (true) {
  case (taille >= 145 && taille <= 171 && poids >= 43 && poids <= 65):
    tailleVetement = 1;
    break;
  case (taille >= 160 && taille <= 182 && poids >= 48 && poids <= 71):
    tailleVetement = 2;
    break;
  case (taille > 163 && poids > 54):
    tailleVetement = 3;
    break;
  default:
    tailleVetement = "inconnue";
    break;
}

if (tailleVetement === "inconnue") {
  console.log("??? jamais inconnu vu que ya pas de limites inf et sup ici.");
} else {
  console.log("Votre taille de vêtement est : " + tailleVetement);
}
