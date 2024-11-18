const timers = require("timers");

// belirtilen süre aralıklarıyla sürekli olarak çalışacak bir fonksiyon başlatır
timers.setInterval(() => {
  console.log(Date.now());
  console.log(new Date());
}, 1000);

// yalnızca bir kez çalışacak olan bir zamanlayıcı fonksiyonu başlatır
timers.setTimeout(() => {
  console.log("5 saniye sonra çalışıyorum.");
}, 5000);

// çıktı: merhaba, merhaba 2, selam
console.log("merhaba");
timers.setImmediate(() => {
  console.log("selam");
});
console.log("merhaba 2");
