//cala impot sur le revenu et en paralel les parts fiscales et faire division impot/nbparts

let montantNetImposable = prompt("Entrez le montant net imposable :");
let nbAdultes = prompt("Entrez le nombre d'adultes :");
let nbEnfants = prompt("Entrez le nombre d'enfants :");

// parts fiscales
let nbPartsFiscales = parseFloat(nbAdultes);
if (nbEnfants >= 1) {
  nbPartsFiscales += nbEnfants > 2 ? 1 + (nbEnfants - 2) : nbEnfants * 0.5;
}

// impot sur le revenu
let montantNetImposableParParts = montantNetImposable/nbPartsFiscales;
let impotSurLeRevenu = 0;

if (montantNetImposableParParts <= 10777) {
  impotSurLeRevenu = 0;
} else if (montantNetImposableParParts > 10777 && montantNetImposableParParts <= 27478) {
  impotSurLeRevenu = Math.round((montantNetImposableParParts - 10777) * 0.11);
} else if (montantNetImposableParParts > 27478 && montantNetImposableParParts <= 78570) {
  let impotSeuil11 = Math.round((27478 - 10777) * 0.11);
  let impotRestant = Math.round((montantNetImposableParParts - 27478) * 0.3);
  impotSurLeRevenu = impotSeuil11 + impotRestant;
} else if (montantNetImposableParParts > 78570 && montantNetImposableParParts <= 168994) {
    let impotSeuil11 = Math.round((27478 - 10777) * 0.11);
    let impotSeuil30 = Math.round((78570 - 27478 - 10777) * 0.3);
    let impotRestant = Math.round((montantNetImposableParParts - 78570) * 0.41);
    impotSurLeRevenu = impotSeuil30 + impotSeuil11 + impotRestant;
  } else if (montantNetImposableParParts > 168994) {
    let impotSeuil11 = Math.round((27478 - 10777) * 0.11);
    let impotSeuil30 = Math.round((78570 - 27478 - 10777) * 0.3);
    let impotSeuil41 = Math.round((168994 - 78570 - 27478 - 10777) * 0.41);
    let impotRestant = Math.round((montantNetImposableParParts - 168994) * 0.45);
    impotSurLeRevenu = impotSeuil41 + impotSeuil30 + impotSeuil11 + impotRestant;
  } else {
    console.log("y'a pas de else");
}

let impotSurLeRevenuParParts = impotSurLeRevenu * nbPartsFiscales;

//test si parts fisscal bien cala
console.log("Nombre de parts fiscales : " + nbPartsFiscales);
// consolog final
console.log(
  "Le montant de l'impôt sur le revenu pour un foyer de " +
    nbAdultes +
    " adultes et de " +
    nbEnfants +
    " enfants, avec un revenu fiscal de " +
    montantNetImposable +
    "€ s'élève à " +
    impotSurLeRevenuParParts +
    "€."
);
