let n = parseInt(prompt("Entrez un nombre entier :"));
document.write(`Vous avez saisi ${n}. <br>`)

// version simple parcours/2
// parcourage des entiers de 1 à n/2 pour trouver toutes les sommes d'entiers consecutifs de n
let i = 1;
while (i <= n/2) {
  let somme = i;
  let chain = i.toString();

  // ajout les entiers consécutifs suivants à la somme et à la chaîne de caractères
  let j = i+1;
  while (somme < n) {
    somme += j;
    chain += "+" + j.toString();
    j++;
  }

  // if somme est égale à n, afficher la chaîne de caractères correspondante
  if (somme === n) {
    document.write(n + " = " + chain + "<br>");
  }

  i++;
}
