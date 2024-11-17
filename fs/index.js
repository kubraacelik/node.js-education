const fs = require("fs");

// index.txt dosyasını oluşturur ve içine "Merhaba NodeJS" yazar.
//* fs.writeFile("index.txt", "Merhaba NodeJS", (err) => {
//*   console.log("hata mevcut mu", err);
//* });

//* fs.writeFileSync("index2.txt", "Merhaba \nNodeJS", (err) => {
//*   console.log("hata mevcut mu", err);
//* });

// Döngü 20 kez çalışır ve her seferinde "index.txt" dosyasına yeni bir satıra "Selam" eklenir.
//* for (let index = 0; index < 20; index++) {
//*   fs.appendFile("index.txt", "\nSelam", (err) => {
//*     console.log("hata mevcut mu", err);
//*   });
//* }

// index.txt dosyasını yazma modu ("w") ile açar.
//* fs.open("index.txt", "w", (err) => {
//*   console.log("dosya açıldı");
//* });

// index.txt dosyasını okur ve data.toString() ile dosya içeriği string formatına çevrilir.
//* fs.readFile("index.txt", (err, data) => {
//*   console.log("index", data.toString());
//* });

// test.txt dosyasını siler.
//* fs.unlink("test.txt", (err) => {
//*   console.log("dosya silindi", err);
//* });

// index.txt dosyasını alır ve içeriğini index3.txt dosyasına kopyalar.
//* fs.copyFile("index.txt", "index3.txt", () => {});

// index3.txt dosyasının adını kubra.txt olarak değiştirir.
//* fs.rename("index3.txt", "kubra.txt", () => []);

// a/b/c şeklinde iç içe klasörler oluşturur.
//* fs.mkdir("a/b/c", { recursive: true }, () => {});

// Geçerli dizini ("./") açar ve içindeki tüm dosya ve klasörleri listeler.
//* fs.opendir("./", async (err, data) => {
//*   for await (const d of data)
//*     console.log(
//*       "name",
//*       d.name,
//*       "isFile",
//*       d.isFile(),
//*       "isDirec",
//*       d.isDirectory()
//*     );
//* });

// Geçerli dizindeki ("./") tüm dosya ve klasörlerin adlarını bir dizi olarak döner.
//* fs.readdir("./", (err, files) => {
//*   console.log("files", files);
//* });

// index.txt dosyasının mevcut olup olmadığını senkron olarak kontrol eder.
//* console.log(fs.existsSync("index.txt"));

// kubra.txt dosyasının bilgilerini alır.
//* fs.stat("kubra.txt", (err, stats) => {
//*  console.log("stats", stats);
//* });

// kubra.txt dosyasını izler ve dosyada bir değişiklik olduğunda çalışır.
//* fs.watchFile("kubra.txt", (curr, prev) => {
//*   console.log("curr", curr);
//*   console.log("prev", prev);
//* });
