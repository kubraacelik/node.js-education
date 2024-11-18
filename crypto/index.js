// veri şifreleme, deşifreleme ve hashing işlemleri için kullanılır
const crypto = require("crypto");

const secretKey = "sha25617sd89vhs785dsvsdvsd1sdd8ds";
const hash = crypto
  .createHash("sha512", secretKey)
  .update("benimparolam256")
  .digest("hex");
console.log("hash", hash);
