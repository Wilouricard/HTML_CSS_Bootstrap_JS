let personnes = [
    ["Jean", "Dupont", 15],
    ["Pierre", "Durant", 16],
    ["Jean", "Marti", 17]
  ];
  
  document.write("<h1>Tableau des personnes</h1>");
  document.write("<table>");
  document.write("<tr><th>Prénom</th><th>Nom</th><th>Âge</th></tr>");
  for (let i = 0; i < personnes.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < personnes[i].length; j++) {
      document.write("<td>" + personnes[i][j] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");

  console.log(personnes[1][0] + " " + personnes[1][1]);
  