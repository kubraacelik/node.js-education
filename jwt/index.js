const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtMiddleware = require("./jwtMiddleware");

app.use(express.json());

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  // JWT token'ını oluşturur
  const token = jwt.sign(
    {
      // Payload : Token içinde taşınacak veriler
      ad: username,
      id: Date.now(),
      issuer: "www.abc.com",
      audience: "abc.com",
    },
    // Secret key: Token'ı imzalamak için kullanılan gizli anahtar
    "merhaba123*",
    // Options: Token'la ilgili ek ayarlar
    { expiresIn: "2h" }
  );
  res.json({ name: username, token: token });
});

router.get("/users", (req, res) => {
  res.send("Başarılı Giriş");
});

router.get("/products", (req, res) => {
  res.send("Başarılı Giriş");
});

app.use(jwtMiddleware);
app.use(router);

app.listen(5000, () => {
  console.log("http://localhost:5000 portunda çalışıyor");
});
