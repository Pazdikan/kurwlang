const fs = require("fs");

const fileName = process.argv[2];

if (!fileName) throw "Please provide a .kurwa file as an argument";

fs.readFile("./test.kurwa", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const translations = {
    funkcja: "function",
    zwróć: "return",
    jeżeli: "if",
    konsola: "console",
    "w przeciwnym razie": "else",
  };

  const pattern = Object.keys(translations).join("|");
  const regex = new RegExp(`\\b(${pattern})\\b`, "g");

  const translatedCode = data.replace(regex, (match) => translations[match]);

  fs.writeFile("output.js", translatedCode, (err) => {
    if (err) console.error(err);
  });
});
