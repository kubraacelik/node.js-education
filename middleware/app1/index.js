const express = require("express");
const app = express();
const router = express.Router();
const homeRouteMiddleware = require("./middleware/HomeRouteMiddleware.js");
const homeRouteMiddleware2 = require("./middleware/HomeRouteMiddleware2.js");
const globalMiddleware = require("./middleware/GlobalMiddleware.js");

router.get("/", [homeRouteMiddleware, homeRouteMiddleware2], (req, res) => {
  res.send("Hoşgeldin");
});

router.get("/test", (req, res, next) => {
  res.send("Selam");
});

router.get("/merhaba", (req, res, next) => {
  res.send("Merhaba 2");
});

// app.use((req, res, next) => {
//   if (!req.url.includes("/merhaba")) {
//     if (Number(req.query.yas) === 20) {
//       console.log("Middleware 2 çalışıyor");
//       next();
//     } else {
//       res.status(401).json({ id: 1 });
//     }
//   } else {
//     next();
//   }
// });

app.use(globalMiddleware);
app.use(router);

app.listen(5000, () => {
  console.log("Uygulama http://localhost:5000 portunda çalışıyor");
});
