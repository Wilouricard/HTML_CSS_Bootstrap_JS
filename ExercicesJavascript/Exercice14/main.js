let a = parseFloat(prompt("Entrez la longueur du segment a :"));
let b = parseFloat(prompt("Entrez la longueur du segment b :"));
let c = parseFloat(prompt("Entrez la longueur du segment c :"));


if (a === b && b === c) {
  console.log("Le triangle est équilatéral");
} else if (a === b || b === c || a === c) {
  console.log("Le triangle est isocèle");
} else {
  console.log("Le triangle est juste un triangle lambda pas spécial");
}
