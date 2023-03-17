document.write("<h2>Menu et Sous-Menus</h2>");
for (let i = 1; i <= 3; i++) {
    document.write("<ul>Chapitre " + i + "</ul>");
    for (let j = 1; j <= 3; j++) {
      document.write("<li>Sous-partie " + j + "</li>");
    }
  }
  