let population = 96809; // popo en 2015
const tauxCroissance = 0.0089; // 0.89%

document.write("<h1>Accroissement de la population de Tourcoing</h1>");
document.write(`<h3>En 2015, il a été recensé ${Math.round(population)} habitants. le taux d'accroissement de la population étant de 0.89%. Combien faudra-t-il d'années pour atteindre une popo de 120.000 habitants?</h3>`);

for (let annee = 2015; annee <= 2040; annee++) {
  population += population * tauxCroissance; // augmentation de la population
  document.write(`En ${annee}, la population de Tourcoing est de ${Math.round(population)} habitants.<br>`);
}

