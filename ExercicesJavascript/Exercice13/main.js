let age = prompt("Quel est l'âge de votre enfant ?");

let categorie;
if (age < 3) {
  categorie = "Trop jeune pour pratiquer";
} else if (age >= 3 && age <= 6) {
  categorie = "Baby";
} else if (age >= 7 && age <= 8) {
  categorie = "Poussin";
} else if (age >= 9 && age <= 10) {
  categorie = "Pupille";
} else if (age >= 11 && age <= 12) {
  categorie = "Minime";
} else if (age >= 13 && age < 18) {
  categorie = "Cadet";
} else if (age >= 18) {
  categorie = "Plus un enfant";
}

alert(`votre enfant est dans la catégorie ${categorie}.`);
