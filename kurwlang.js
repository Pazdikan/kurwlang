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
    jeżeli: "if",
    konsola: "console",
    "w przeciwnym razie": "else",
    stała: "const",
    pozwól: "let",
    dla: "for",
    "podczas gdy": "while",
    przełącznik: "switch",
    przypadek: "case",
    rozjeb: "break",
    kontynuuj: "continue",
    spróbuj: "try",
    złap: "catch",
    "w końcu": "finally",
    nowy: "new",
    to: "this",
    typ: "typeof",
    usuń: "delete",
    w: "in",
    oddaj: "return",
    wyjeb: "throw",
    Błąd: "Error",
  };

  const pattern = Object.keys(translations).join("|");
  const regex = new RegExp(`\\b(${pattern})\\b`, "g");

  const translatedCode = data.replace(regex, (match) => translations[match]);

  fs.writeFile("output.js", translatedCode, (err) => {
    if (err) console.error(err);
  });
});
