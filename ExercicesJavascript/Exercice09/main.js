let capital = parseFloat(prompt("Capital de départ :"));
let taux = parseFloat(prompt("taux d'intéret annuel en % :"));
let duree = parseInt(prompt("Durée d'épargne en années :"));

let interets = capital * (Math.pow((1 + taux / 100), duree) - 1);
let capitalFinal = capital * Math.pow((1 + taux / 100), duree);

interets = Math.round(interets * 100) / 100;
capitalFinal = Math.round(capitalFinal * 100) / 100;

console.log("Montant des intérets : " + interets + " €");
console.log("cqpital final : " + capitalFinal + " €");

// Resultats ne sont pas arrondis comme dans la sotuliton de l'exercixe 
