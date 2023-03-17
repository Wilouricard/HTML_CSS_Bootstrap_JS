let choix = prompt("Distributeur de boissons\n1) Eau\n2) Jus d'orange\n3) Limonade\n4) Café\n5) Thé\nFaites votre choix : ");

switch (choix) {
  case "1":
    console.log("Vous avez choisi : Eau");
    console.log("Votre Eau est servi");
    break;
  case "2":
    console.log("Vous avez choisi : Jus d'orange");
    console.log("Votre jusdorange est servi");
    break;
  case "3":
    console.log("Vous avez choisi : Limonade");
    console.log("Votre limo est servi");
    break;
  case "4":
    console.log("Vous avez choisi : Café");
    console.log("Votre café est servi");
    break;
  case "5":
    console.log("Vous avez choisi : Thé");
    console.log("Votre thé est servi");
    break;
  default:
    console.log("Choix invalide");
    break;
}
