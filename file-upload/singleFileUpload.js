//! dosya yükleme işlemleri için kullanılan middleware
const multer = require("multer");

// dosyaların sunucuda nereye ve hangi isimle kaydedileceğini belirler
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("destination ", file);

    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log("filename ", file);

    cb(
      null,
      file.fieldname + "_" + Date.now() + "_" + "Multer" + file.originalname
    );
  },
});

// yüklenen dosyaları kontrol etmek için kullanılır
const fileFilter = (req, file, cb) => {
  console.log("fileFilter ", file);

  cb(null, true);
};

// postman'den eklerken dosya adında eklenmeli
const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "dosya"
);

module.exports = upload;
