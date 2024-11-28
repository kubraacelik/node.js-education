const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const singleFileUpload = require("./singleFileUpload");

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

app.use(router);

app.listen(5000, () => {
  console.log("http://localhost:5000'de çalışıyor");
});
