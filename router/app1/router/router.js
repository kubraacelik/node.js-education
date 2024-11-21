const express = require("express");
const router = express.Router();
const controller = require("../controller/indexController");

router.get("/", controller.Index);

// http://localhost:5000/bmw/arac/ankara?min=3000&max=5000 gibi arama yapıldı
router.get("/:markaAdi/arac/:sehirAdi", controller.getParameters);

router.post("/", controller.Post);

router.delete("/", controller.Delete);

router.put("/", controller.Put);

// verilen hiçbir istekle uyuşmuyorsa
router.use((req, res) => {
  res.status(404).json({
    message: "Aranan kaynak bulunamadı",
    url: req.url,
    date: Date.now(),
    statusCode: 404,
  });
});

module.exports = router;
