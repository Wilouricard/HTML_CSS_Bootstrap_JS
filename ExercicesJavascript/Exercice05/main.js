let chaine = prompt("Entrez une chane :");

console.log("chaine en minuscules : " + chaine.toLowerCase());

let tableau = chaine.split("");
console.log("chgaine caracteres : " + tableau);

let mots = chaine.toLowerCase().split(" ");
for (let i = 0; i < mots.length; i++) {
  mots[i] = mots[i].charAt(0).toUpperCase() + mots[i].slice(1);
}
// à chercher si ya une fction capitalize?
let chaineCapitalized = mots.join(" ");
console.log("chaine capitalized : " + chaineCapitalized);
