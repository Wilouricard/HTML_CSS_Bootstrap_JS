let taille = parseInt(prompt("quelle est ta taille en cm ?"));
let poids = parseInt(prompt("Quel est ta  poids en kg ?"));

let tailleVetement;

// if (taille <= 145 && taille <= 169 && poids <= 43 && poids <= 65) {
//   tailleVetement = 1;
// } else if (taille >= 160 && taille <= 178 && poids >= 48 && poids <= 71) {
//   tailleVetement = 2;
// } else if (taille > 163 && poids > 54) {
//   tailleVetement = 3;
// } else {
//   tailleVetement = "inconnue";
// }

if (taille >= 145 && taille <= 171 && poids >= 43 && poids <= 65) {
  tailleVetement = 1;
} else if (taille >= 160 && taille <= 182 && poids >= 48 && poids <= 71) {
  tailleVetement = 2;
} else if (taille > 163 && poids > 54) {
  tailleVetement = 3;
} else {
  tailleVetement = "inconnue";
}

if (tailleVetement === "inconnue") {
  console.log("??? jamais inconnu vu que ya pas de limites inf et sup ici.");
} else {
  console.log("ta taille de vêtement est : " + tailleVetement);
}
