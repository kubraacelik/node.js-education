const express = require("express");
const app = express();
const router = express.Router();

// Gelen isteklerin gövdesindeki (body) verileri JSON formatında okuyabilmek için bir middleware
app.use(express.json());

let data = [
  {
    id: 1,
    ad: "Kübra",
    soyad: "Çelik",
  },
  {
    id: 2,
    ad: "Kerem",
    soyad: "Bilginer",
  },
  {
    id: 3,
    ad: "Şeyma",
    soyad: "Dalkılıç",
  },
];

router.get("/users-list", (req, res) => {
  res.status(200).json(data);
});

router.post("/users-create", (req, res) => {
  // Gönderilen kullanıcı verileri okunur
  const body = req.body;
  console.log(body);
  body.id = Date.now();
  data.push(body);
  res.status(201).json(body);
});

router.delete("/users-delete/:userId", (req, res) => {
  const userId = req.params.userId;
  const newArr = data.filter((user) => {
    return user.id !== Number(userId);
  });
  data = newArr;
  res
    .status(200)
    .json({ message: userId + " Numaralı Kayıt Başarıyla Silindi" });
});

router.put("/users-update/:userId", (req, res) => {
  const body = req.body;
  const findedIndex = data.findIndex((user) => {
    return user.id === Number(req.params.userId);
  });
  data[findedIndex] = { ...body, id: req.params.userId };
  res.status(200).json(data[findedIndex]);
});

app.use(router);

app.listen(5000, () => {
  console.log("5000 numaralı portta uygulama çalışıyor");
});
