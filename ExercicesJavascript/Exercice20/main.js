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
// declaraiton varlocal ici et pas dans le switchcase
let impotSeuil11 = 0;
let impotSeuil30 = 0;
let impotSeuil41 = 0;

switch(true) {
  case (montantNetImposableParParts <= 10777):
    impotSurLeRevenu = 0;
    break;
  case (montantNetImposableParParts <= 27478):
    impotSurLeRevenu = Math.round((montantNetImposableParParts - 10777) * 0.11);
    break;
  case (montantNetImposableParParts <= 78570):
    impotSeuil11 = Math.round((27478 - 10777) * 0.11);
    impotRestant = Math.round((montantNetImposableParParts - 27478) * 0.3);
    impotSurLeRevenu = impotSeuil11 + impotRestant;
    break;
  case (montantNetImposableParParts <= 168994):
    impotSeuil11 = Math.round((27478 - 10777) * 0.11);
    impotSeuil30 = Math.round((78570 - 27478 - 10777) * 0.3);
    impotRestant = Math.round((montantNetImposableParParts - 78570) * 0.41);
    impotSurLeRevenu = impotSeuil30 + impotSeuil11 + impotRestant;
    break;
  default:
    impotSeuil11 = Math.round((27478 - 10777) * 0.11);
    impotSeuil30 = Math.round((78570 - 27478 - 10777) * 0.3);
    impotSeuil41 = Math.round((168994 - 78570 - 27478 - 10777) * 0.41);
    impotRestant = Math.round((montantNetImposableParParts - 168994) * 0.45);
    impotSurLeRevenu = impotSeuil41 + impotSeuil30 + impotSeuil11 + impotRestant;
    break;
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
