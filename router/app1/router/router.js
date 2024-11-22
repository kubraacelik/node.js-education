const express = require("express");
const router = express.Router();
const indexController = require("../controller/indexController");
const userController = require("../controller/userController");
const parameterController = require("../controller/parameterController");

router.get("/", indexController.Index);

// http://localhost:5000/bmw/arac/ankara?min=3000&max=5000 gibi arama yapıldı
router.get("/:markaAdi/arac/:sehirAdi", indexController.getParameters);

router.post("/", indexController.Post);

router.delete("/", indexController.Delete);

router.put("/", indexController.Put);

router.get("/user", userController.Index);

router.get("/parameter", parameterController.Index);

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
