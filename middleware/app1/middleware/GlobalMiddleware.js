module.exports = (req, res, next) => {
  if (!req.url.includes("/merhaba")) {
    if (req.query.ad === "kubra") {
      console.log("Middleware 1 çalışıyor");
      next();
    } else {
      res.send("Adı Kubra olan geçebilir");
    }
  } else {
    next();
  }
};
