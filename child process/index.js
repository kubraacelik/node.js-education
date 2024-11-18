// yeni bir işlem başlatmayı ve dış komutları çalıştırmayı gösterir
// spawn daha uzun süreli ve veri akışı olan işlemleri başlatmak için kullanılır
// exec daha kısa süreli komutlar için kullanılır
const { spawn, exec } = require("child_process");

// cmd.exe çalıştırılıyor. /c parametresi, verilen komutun çalıştırılmasını ve ardından cmd.exe'nin kapanmasını sağlar
const myEcho = spawn("cmd.exe", ["/c", "echo Merhaba Dunya"]);

// çıktıyı ekrana yazdırır
myEcho.stdout.on("data", (data) => {
  console.log("d", data.toString());
});

// exec kullanarak başka bir JavaScript dosyasını çalıştırır
const otherJs = exec("node other.js");
otherJs.stdout.on("data", (data) => {
  console.log("other", data);
});

// önce cd C:\\Users\\hp komutunu çalıştırır ve ardından dir komutunu çalıştırır
const desktop = exec("cd C:\\Users\\hp && dir");
desktop.stdout.on("data", (data) => {
  console.log("d", data);
});

// Windows Media Player'ı çalıştırmak için kullanılır
const wmplayer = exec(
  "cd C:\\Program Files\\Windows Media Player && start wmplayer.exe"
);

// belirtilen dizinde fromnodejs adında yeni bir klasör oluşturur
const fnodejs = exec("cd C:\\Users\\hp\\Desktop && mkdir fromnodejs");
desktop.stdout.on("data", (data) => {
  console.log("d", data);
});

const executeOtherJsApp = exec(
  `cd C:\\Users\\hp\\nodejs-egitim\\${process.argv[2]} && node ${process.argv[3]}.js`
);
executeOtherJsApp.stdout.on("data", (data) => {
  console.log("otherproject", data);
});
