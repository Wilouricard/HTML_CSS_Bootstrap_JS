let age = parseInt(prompt("Quel est votre âge ?"));
let anciennete = parseInt(prompt("ancienneté dans l'(entperise ) ?"));
let salaire = parseFloat(prompt("Quel est votre dernier salaire mensuel ?"));

let indemnité;
if (anciennete >= 1 && anciennete <= 10) {
  indemnité = salaire / 2 * anciennete;
} else if (anciennete > 10) {
  indemnité = salaire * anciennete;
}
if (age >= 46 && age <= 49) {
  indemnité += 2 * salaire;
} else if (age >= 50) {
  indemnité += 5 * salaire;
}

console.log("Votre indemnité de licenciement est de " + indemnité.toFixed(2) + " euros.");


//sommes enormes, algo à revoir... 
// test sur 
// Age : 55, Ancienneté : 25 ans, Salaire : 6000€
