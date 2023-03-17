
document.write("<div id='main'>");

for (let i = 1; i <= 10; i++) {
  document.write("<div id='table'>");

  document.write("<h2>Table de " + i + "</h2>");

  for (let j = 1; j <= 10; j++) {
    document.write(i + " x " + j + " = " + (i * j) + "<br>");
  }

  document.write("</div>");
}

document.write("</div>");

  