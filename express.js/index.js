const express = require("express");
const app = express();
const fs = require("fs");

// assets klasörüne erişim imkanı sağlar
app.use("/assets", express.static("assets"));

// dosyayı ekranda gösterir
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/user", (req, res) => {
  res.sendFile(__dirname + "/user.html");
});

// /test olunca /user sayfasına git
app.get("/test", (req, res) => {
  res.redirect("/user");
});

// verilen yazıyı ekranda gösterir
app.get("/profile", (req, res) => {
  res.send("Profile");
});

app.get("/getjson", (req, res) => {
  res.json([
    { id: 1, ad: "Kübra" },
    { id: 2, ad: "Kerem" },
  ]);
  //res.json({ id: 1, ad: "Kübra" });
});

app.listen(5000, () => {
  console.log(`Proje http://localhost:5000 portunda çalışıyor`);
});
