let n = parseInt(prompt("Entrez un nombre entier :"));
document.write(`Vous avez saisi ${n}. <br>`)




// version simple parcours/2
// parcourage des entiers de 1 à n/2 pour trouver toutes les sommes d'entiers consecutifs de n
for (let i = 1; i <= n/2; i++) {
  let somme = i;
  let chain = i.toString();

  // ajout les entiers consécutifs suivants à la somme et à la chaîne de caractères
  for (let j = i+1; somme < n; j++) {
    somme += j;
    chain += "+" + j.toString();
  }

  // Si la somme est égale à n, afficher la chaîne de caractères correspondante
  if (somme === n) {
    document.write(n + " = " + chain + "<br>");
  }
}

// l'autre version à faire et tester:
// possible avec version double boucle for imbriqué pour parcourir tout les entiers de 1 à n, recherche des combinaisons possibles  de suites d'entier consécutifs qui peuvent former n. Use let somme pour stocker, if somme === n alors on built la chaine d'entiers consecutif 
