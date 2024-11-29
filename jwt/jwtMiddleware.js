const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (!req.url.includes("/login")) {
    if (req.headers.authorization) {
      const t = req.headers.authorization.split(" ")[1];
      // verilen token'ı doğrulamak için kullanılır
      jwt.verify(t, "merhaba123*", (err, decode) => {
        if (err) {
          return res.status(401).send({ message: "Oturum Açmadan Giremezsin" });
        }
        req.user = decode;
        next();
      });
    } else {
      return res.status(401).send({ message: "Oturum Açmadan Giremezsin" });
    }
  } else {
    next();
  }
};
