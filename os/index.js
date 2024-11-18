// işletim sistemi hakkında bilgi sağlar
const os = require("os");

// alt satıra iner
console.log("kubra" + os.EOL + "çelik" + os.EOL + "23");
// CPU mimarisini döndürür
console.log(os.arch());
// CPU bilgilerini içeren bir dizi döndürür
console.log(os.cpus());
// kullanılabilir RAM miktarını bayt cinsinden döndürür
console.log(os.freemem());
// ana dizin yolunu döndürür
console.log(os.homedir());
// ana bilgisayar adını döndürür
console.log(os.hostname());
// sistemdeki tüm ağ arabirimlerini döndüren bir nesne verir
console.log(os.networkInterfaces());
// işletim sisteminizin platformunu döndürür
console.log(os.platform());
// işletim sisteminde geçici dosyalar için kullanılan dizini döndürür
console.log(os.tmpdir());
// sistemde bulunan toplam bellek miktarını bayt cinsinden döndürür
console.log(os.totalmem());
// işletim sisteminin adını döndürür
console.log(os.type());
// sistemin yeniden başlatıldığından beri geçen süreyi saniye cinsinden döndürür
console.log(os.uptime());
// mevcut kullanıcı hakkında bilgi verir
console.log(os.userInfo());
// işletim sisteminin sürüm bilgisini döndürür
console.log(os.version());
