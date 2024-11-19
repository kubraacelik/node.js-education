const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  console.log(req.url, req.headers, req.method);

  // Dosya yolunu alıyoruz ve dosyayı okumaya çalışıyoruz
  fs.readFile(req.url.split('/')[1], (err, data) => {
    if (err) {
      // Dosya bulunamazsa 404 hatası ve mesaj gönderiyoruz
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('Sayfa Yok');
    }
    
    // Başlıkları burada yalnızca bir kez ayarlıyoruz
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Dosya başarıyla okunursa, veriyi yanıt olarak gönderiyoruz
    res.end(data);
  });
}).listen(5000, () => {
  console.log("Server 5000 portunda çalışıyor...");
});
