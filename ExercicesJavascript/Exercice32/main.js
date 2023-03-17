function calculerPerimetreRectangle(longueur, largeur) {
    return 2 * (longueur + largeur);
  }
  
  let longueur = parseFloat(prompt("Entre la longueur du quadrilatere :"));
  let largeur = parseFloat(prompt("Entre la largeur du quadrilatere :"));
  
  let perimetre = calculerPerimetreRectangle(longueur, largeur);
  
  console.log(`Le perimètre du quadrilatere est ${perimetre}.`);
  