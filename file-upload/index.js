const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const singleFileUpload = require("./singleFileUpload");
const multipleFileUpload = require("./multipleFileUpload");
const differentFieldsFileUpload = require("./differentFieldsFileUpload");
const anyUpload = require("./anyUpload");
const multer = require("multer");

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Merhaba");
});

// belirtilen dizinde uploads klasörü yoksa ekle
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

router.post("/fileUpload", (req, res) => {
  singleFileUpload(req, res, (err) => {
    if (err) {
      res.json(err);
    }
    console.log(req.file);
  });
});

const _upload = multipleFileUpload.array("dosyalar", 5);

// postman'den eklerken dosya adında eklenmeli ve singleFileUpload middleware yaptık
router.post("/multipleFileUpload", (req, res) => {
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
});

router.post("/differentFieldsFileUpload", (req, res) => {
  differentFieldsFileUpload(req, res, (err) => {
    if (err) {
      res.json(err);
    }
    console.log(req.files);
  });
});

router.post("/anyUpload", (req, res) => {
  anyUpload(req, res, (err) => {
    if (err) {
      res.json(err);
    }
    console.log(req.files);
  });
});

app.use(router);

app.listen(5000, () => {
  console.log("http://localhost:5000'de çalışıyor");
});
