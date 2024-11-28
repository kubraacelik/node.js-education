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
  // Eğer dosyanın MIME tipi bir görüntü dosyası içeriyorsa (image kelimesini içeriyorsa) dosya kabul edilir
  if (file.mimetype.includes("image")) {
    cb(null, true);
  } else {
    cb({ message: "Dosya Tipi Desteklenmiyor" }, false);
  }

  console.log("fileFilter ", file);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
