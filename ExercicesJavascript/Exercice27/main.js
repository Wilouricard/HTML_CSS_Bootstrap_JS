var etudiants = [
    {
    prenom: "José",
    nom: "Garcia",
    matieres: {
      francais: 16,
      anglais: 7,
      humour: 14
    }
    },
    {
    prenom: "Antoine",
    nom: "De Caunes",
    matieres: {
      francais: 15,
      anglais: 6,
      humour: 16,
      informatique: 4,
      sport: 10
    }
    }
   ];

   // SA?S la fonction moyenne(), intingré cash dans la boucle interne for 

   //RESULTATS
   document.write("<h1>Liste des étudiants</h1>");
   for (var i = 0; i < etudiants.length; i++) {
     var etudiant = etudiants[i];
     var prenomNom = etudiant.prenom + " " + etudiant.nom;
     document.write("<h2>" + prenomNom + "</h2>");
     document.write("<ul>");
     var total = 0;
     var count = 0;
     for (var matiere in etudiant.matieres) {
       var note = etudiant.matieres[matiere];
       document.write("<li>" + matiere + " : " + note + "</li>");
       total += note;
       count++;
     }
     document.write("</ul>");
     var moyenne = total / count;
     document.write("<p>Moyenne générale : " + moyenne.toFixed(2) + "</p>");
   }
   