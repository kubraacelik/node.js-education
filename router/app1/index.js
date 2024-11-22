const express = require("express");
const app = express();
const appRouter = require("./router/router");
const path = require("path");

// Şablon motoru olarak EJS'yi ayarladık(views klasöründe olduğu belirtildi)
app.set("view engine", "ejs");

// middleware router'dan önce gelir yoksa çalışmaz
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(appRouter);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
