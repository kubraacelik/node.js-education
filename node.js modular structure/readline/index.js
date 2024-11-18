// komut satırında etkileşimli bir kullanıcı arabirimi oluşturur
const readline = require("readline");

const process = require("process");

// İlk readline arayüzünü oluşturuyoruz
// const rl = readline.createInterface({
//   input: process.stdin, // Kullanıcının girdiği veriyi almak için stdin kullanıyoruz
//   output: process.stdout, // Yanıtı ekrana yazdırmak için stdout kullanıyoruz
// });

// Kullanıcıya bir soru soruyoruz ve cevabını alıyoruz
// rl.question("Adın ne", (answer) => {
//   // Kullanıcının verdiği cevabı ekrana yazdırıyoruz
//   console.log("cevap", answer);
//   // readline arayüzünü kapatıyoruz
//   rl.close();
// });

// İkinci readline arayüzünü oluşturuyoruz
const rl2 = readline.createInterface({
  input: process.stdin, // Yine kullanıcıdan giriş almak için stdin kullanıyoruz
  output: process.stdout, // Yanıtı ekrana yazdırmak için stdout kullanıyoruz
  prompt: "-->", // Her yeni satırda gösterilecek olan istem mesajı
});

// readline arayüzüne başlatıyoruz, yani prompt'u ekrana yazdırıyoruz
rl2.prompt();

rl2
  .on("line", (line) => {
    switch (line.trim()) {
      case "selam":
        console.log("Merhaba");
        rl2.close(); // Kullanıcı "selam" yazarsa, "Merhaba" yazılır ve readline arayüzü kapatılır
        break;
      default:
        console.log("Tam olarak anlayamadım"); // Diğer tüm girdiler için, "Tam olarak anlayamadım" mesajı gösterilir
        break;
    }
    rl2.prompt(); // Her input işleminden sonra prompt yeniden gösterilir
  })
  .on("close", () => {
    console.log("güle güle :)"); // readline arayüzü kapandığında "güle güle :)" mesajı gösterilir
    process.exit(); // Uygulama sonlandırılır
  });
