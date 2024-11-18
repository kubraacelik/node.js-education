// URL'leri ayrıştırmak, değiştirmek veya yeniden oluşturmak için kullanılır
const url = require("url");
const myUrl = new URL("https://www.google.com.tr:8080/?searchQ=abc");
console.log(myUrl.href);
console.log("first", myUrl.pathname);
console.log("first", myUrl.hash);
console.log("myurl", myUrl.hostname);
console.log("first", myUrl.port);
console.log("my", myUrl.protocol);

console.log(myUrl.searchParams.get("searchQ"));
console.log(myUrl.searchParams.has("searchQ"));

const adres = "https://localhost:4545/abc/?ad=ali&soyad=veli";
console.log(url.parse(adres));
