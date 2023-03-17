let nombre1 = parseInt(prompt("Entre le premier nombre :"));
let nombre2 = parseInt(prompt("Entrezle deuxième nombre :"));

if (nombre1 % nombre2 === 0) {
  console.log(`${nombre1} est divisible par ${nombre2}.`);
} else {
  console.log(`${nombre1} n'est pas divisible par ${nombre2}.`);
}
