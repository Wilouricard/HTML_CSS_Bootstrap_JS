let mot = prompt("Entrez un mot :");

let motInverse = mot.split("").reverse().join("");

if (mot === motInverse) {
  console.log(mot + " est un palindrom");
} else {
  console.log(mot + " n'est pas un palindrome");
}

