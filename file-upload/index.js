const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const singleFileUpload = require("./singleFileUpload");
const multer = require("multer");

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Merhaba");
});

// belirtilen dizinde uploads klasörü yoksa ekle
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

const _upload = singleFileUpload.array("dosyalar", 5);

// postman'den eklerken dosya adında eklenmeli ve singleFileUpload middleware yaptık
router.post("/fileUpload", (req, res) => {
  _upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log("multer error ", err);
      res.json(err);
    } else {
      console.log("hataa", err);
    }
    if (err) {
      res.send("Hata var");
    } else {
      res.send("Okey");
    }
  });
  // singleFileUpload(req, res, (err) => {
  //   if (err) {
  //     res.json(err);
  //   }
  //   console.log(req.file);
  // });
});

app.use(router);

app.listen(5000, () => {
  console.log("http://localhost:5000'de çalışıyor");
});
