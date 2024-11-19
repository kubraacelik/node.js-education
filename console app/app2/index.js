const readline = require("readline");
const fs = require("fs");
const c = require("ansi-colors");

// Kullanıcı, çalıştırma sırasında dosya adını buradan belirtir(node index.js first.txt)
const fileName = process.argv[2];

const colors = ["red", "blue", "yellow", "green", "cyan"];

const readFileLineByLine = async () => {
    // Dosyayı bir akış olarak okumak için kullanılır
  const fileStream = fs.createReadStream(fileName);
  const rl = readline.createInterface({
    input: fileStream,
  });

  for await (const line of rl) {
    const rNumber = Math.floor(Math.random() * 4);
    const rColor = colors[rNumber];
    console.log(c[rColor](line));
  }
};

readFileLineByLine();
// projeyi çalıştırırken node index.js first.txt veya node index.js second.txt olmalı