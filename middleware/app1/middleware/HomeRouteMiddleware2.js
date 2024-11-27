module.exports = (req, res, next) => {
    if (req.query.ad === "kubra") {
      next();
    } else {
      res.send("adı kubra olan kullanıcılar girebilir");
    }
  };
  