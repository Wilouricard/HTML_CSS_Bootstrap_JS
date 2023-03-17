let nbNotes = parseInt(prompt("Combien de notes souhaitez-vous saisir ?"));

let meilleureNote = 0; // on part de 0 et on ajoute les meilleurs note par dessus
let moinsBonneNote = 20; // in part de 20 et compare notes inférieur
let sommeNotes = 0;
let i = 1;

while (i <= nbNotes) {
let note = parseFloat(prompt("Saisissez la note " + i + " :"));

if (note > meilleureNote) {
meilleureNote = note;
}
if (note < moinsBonneNote) {
moinsBonneNote = note;
}

sommeNotes += note;
i++;
}

let moyenne = sommeNotes / nbNotes;

document.write("<h1>Meilleure note, moins bonne note, moyenne des notes</h1>");
document.write("<p>La saisie contient " + nbNotes + " notes :</p>");
document.write("<p>La meilleure note est : " + meilleureNote.toFixed(2) + "/20</p>");
document.write("<p>La moins bonne note est : " + moinsBonneNote.toFixed(2) + "/20</p>");
document.write("<p>La moyenne note est : " + moyenne.toFixed(2) + "/20</p>");