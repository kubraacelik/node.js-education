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
  // Eğer dosyanın tipi resim ise dosya kabul edilir
  if (file.mimetype.includes("image")) {
    cb(null, true);
  } else {
    cb(new multer.MulterError(300, file.originalname), false);
  }

  console.log("fileFilter ", file);
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).fields([
  { name: "profile_pic", maxCount: 1 },
  { name: "cover_picture", maxCount: 2 },
]);

module.exports = upload;
