// veri sıkıştırma ve açma işlemleri için kullanılır
const zlib = require("zlib");
// bir Gzip sıkıştırıcı nesnesi oluşturur
const gzip = zlib.createGzip();
const fs = require("fs");
// test.txt dosyası sıkıştırılmak üzere okuma işlemine alınır
const inp = fs.createReadStream("test.txt");
// sıkıştırılmış dosya test.txt.gz adıyla yazılacaktır
const out = fs.createWriteStream("test.txt.gz");
inp.pipe(gzip).pipe(out);
