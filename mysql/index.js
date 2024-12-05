const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  waitForConnections: true,
  pool: 5,
  charset: "UTF8_GENERAL_CI",
  port: 3306,
  debug: false,
  timezone: "local",
  database: "egitimdb",
});

//*veritabanı oluşturma
const createDB = () => {
  connection.query("CREATE DATABASE egitimdb", (err, result) => {
    if (err) {
      console.log("err", err);
    }
    console.log("result", result);
  });
};

//*tablo oluşturma
const createTable = () => {
  connection.query(
    "CREATE TABLE IF NOT EXISTS ogrenciler (ogrenci_id int AUTO_INCREMENT PRIMARY KEY, ogrenci_adi VARCHAR(100) , ogrenci_soyadi VARCHAR(100))",
    (err, res) => {
      if (err) {
        console.log("err", err);
      }
      console.log("res", res);
    }
  );
};

//*tabloya veri ekleme
const createRecord = () => {
  const query = `INSERT INTO ogrenciler (ogrenci_adi, ogrenci_soyadi) VALUES ("Ahmet", "Koç")`;
  connection.query(query, (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//*tabloya çoklu veri ekleme
const createMultipleRecord = () => {
  const studentsArr = [
    ["Ali", "Kaya"],
    ["Kerem", "Bilginer"],
    ["Onur", "Dolma"],
  ];
  const query2 = `INSERT INTO ogrenciler (ogrenci_adi, ogrenci_soyadi) VALUES ?`;
  connection.query(query2, [studentsArr], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//*dinamik olarak veri ekleme (npm start kübra çelik olarak yazınca ekleme yapar)
const createDynamicRecord = () => {
  const query = `INSERT INTO ogrenciler (ogrenci_adi, ogrenci_soyadi) VALUES (?,?)`;
  const name = process.argv[2];
  const surname = process.argv[3];
  console.log("name", name);
  connection.query(query, [name, surname], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//*verileri listeleme
const selectMyData = () => {
  const query = "SELECT * FROM ogrenciler";
  connection.query(query, (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//*id'ye göre sorgulama
const findById = (id) => {
  const query = "SELECT * FROM ogrenciler WHERE ogrenci_id = ?";
  connection.query(query, [id], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//*ada göre sorgulama
const findByName = (name) => {
  const query = "SELECT * FROM ogrenciler WHERE ogrenci_adi = ?";
  connection.query(query, [name], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//* id'ye ve ada göre sorgulama
const findByNameWithId = (id, name) => {
  const query =
    "SELECT * FROM ogrenciler WHERE ogrenci_id = ? AND ogrenci_adi = ?";
  connection.query(query, [id, name], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//* ada veya soyada göre sorgulama
const findByNameOrSurname = (name, surname) => {
  const query =
    "SELECT * FROM ogrenciler WHERE ogrenci_adi = ? OR ogrenci_soyadi = ?";
  connection.query(query, [name, surname], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//*id'ye göre silme
const deleteById = (id) => {
  const query = "DELETE FROM ogrenciler WHERE ogrenci_id = ?";
  connection.query(query, [id], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//*id'ye göre adı ve soyadı güncelleme
const updateById = (name, surname, id) => {
  const query =
    "UPDATE ogrenciler SET ogrenci_adi = ?, ogrenci_soyadi = ? WHERE ogrenci_id = ?";
  connection.query(query, [name, surname, id], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//!Bire-Çok tablo oluşturma
//NOT: FOREIGN KEY verilmiş bu da bire-çok tablosunu oluşturur
const createOneToManyTable = () => {
  connection.query(
    `CREATE TABLE kisiler(
    kisi_id INT AUTO_INCREMENT PRIMARY KEY,
    kisi_ad VARCHAR(100),
    kisi_soyad VARCHAR(100))
    `,
    (err, result) => {
      if (!err) {
        connection.query(
          `CREATE TABLE sosyal_medya(
        sosyal_medya_id INT AUTO_INCREMENT PRIMARY KEY,
        kisi_id INT NOT NULL,
        sosyal_medya_ad VARCHAR(100),
        FOREIGN KEY (kisi_id) REFERENCES kisiler(kisi_id) ON DELETE CASCADE)
        `,
          (err, result) => {
            if (!err) {
              console.log("Hata yok");
            } else {
              console.log("hata", err);
            }
          }
        );
      } else {
        console.log("hata", err);
      }
    }
  );
};

//!Bire-Çok Tabloya Veri Ekleme
const createOneToManyUser = (ad, soyad) => {
  const query = `INSERT INTO kisiler (kisi_ad, kisi_soyad) VALUES (?, ?)`;
  connection.query(query, [ad, soyad], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//!Bire-Çok Tablosundan sosyal_medya'ya Veri Ekleme
const createSocialMediaWithUser = () => {
  const query = `INSERT INTO sosyal_medya (kisi_id, sosyal_medya_ad) VALUES (?, ?)`;
  connection.query(query, [2, "PINTEREST"], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//!Bire-Çok Tablosunda Veri Listeleme
const getAllRelationsData = () => {
  const query = `SELECT * FROM kisiler AS k INNER JOIN sosyal_medya AS s ON k.kisi_id=s.kisi_id`;
  connection.query(query, (err, res) => {
    if (err) {
      console.log("Hata", err);
    } else {
      console.log("res: ", res);
    }
  });
};

//!Bire-Çok Tablosunda Id'ye Göre Veri Listeleme
const getRelationsById = (id) => {
  const query = `
  SELECT k.kisi_ad, s.sosyal_medya_id, s.sosyal_medya_ad 
  FROM kisiler AS k INNER JOIN sosyal_medya AS s ON k.kisi_id=s.kisi_id WHERE k.kisi_id = ?`;
  connection.query(query, [id], (err, res) => {
    if (err) {
      console.log("Hata", err);
    } else {
      console.log("res: ", res);
    }
  });
};

//!Bire-Çok Tablosunda Id'ye Göre Veri Güncelleme
const updateOneToManyById = (sosyalMedyaAdi, kisiId, sosyalMedyaId) => {
  const query =
    "UPDATE sosyal_medya SET sosyal_medya_ad = ? WHERE kisi_id = ? AND sosyal_medya_id = ?";
  connection.query(
    query,
    [sosyalMedyaAdi, kisiId, sosyalMedyaId],
    (err, res) => {
      if (err) {
        console.log("err", err);
      }
      console.log("res", res);
    }
  );
};

//!Bire-Çok Tablosunda Id'ye Göre Veri Silme
const deleteOneToManyById = (id) => {
  const query = "DELETE FROM kisiler WHERE kisi_id = ?";
  connection.query(query, [id], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
};

//?Bire-Bir tablo oluşturma
//NOT: FOREIGN KEY verilmiş bu da bire-çok tablosunu oluşturur
const createOneToOneTable = () => {
  connection.query(
    `CREATE TABLE personel_cv(
    personel_cv_id INT AUTO_INCREMENT PRIMARY KEY,
    personel_cv_ad VARCHAR(100))
    `,
    (err, result) => {
      if (!err) {
        connection.query(
          `CREATE TABLE personel(
        personel_id INT AUTO_INCREMENT PRIMARY KEY,
        personel_cv_id INT NOT NULL,
        personel_ad VARCHAR(100),
        personel_soyad VARCHAR(100),
        personel_maas VARCHAR(100),
        FOREIGN KEY (personel_cv_id) REFERENCES personel_cv(personel_cv_id) ON DELETE CASCADE)
        `,
          (err, result) => {
            if (!err) {
              console.log("Hata yok");
            } else {
              console.log("hata", err);
            }
          }
        );
      } else {
        console.log("hata", err);
      }
    }
  );
};

//?Bire-Bir Tabloya Veri Ekleme
const createOneToOneUser = (user) => {
  const query = `INSERT INTO personel_cv (personel_cv_ad) VALUES (?)`;
  connection.query(query, [process.argv[2]], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
    const cvId = res.insertId;
    const query = `INSERT INTO personel (personel_cv_id, personel_ad, personel_soyad, personel_maas) 
                  VALUES (?,?,?,?)`;
    connection.query(
      query,
      [cvId, user.ad, user.soyad, user.maas],
      (err, res) => {
        if (err) {
          console.log("err", err);
        }
        console.log("res", res);
      }
    );
  });
};

//?Bire-Bir Tablosunda Veri Listeleme
const getAllRelationsData2 = () => {
  const query = `
  SELECT p.personel_ad, p.personel_soyad, p.personel_maas, pc.personel_cv_ad 
  FROM personel AS p INNER JOIN personel_cv AS pc ON p.personel_cv_id=pc.personel_cv_id`;
  connection.query(query, (err, res) => {
    if (err) {
      console.log("Hata", err);
    } else {
      console.log("res: ", res);
    }
  });
};

//?Bire-Bir Tablosunda Id'ye Göre Veri Güncelleme
const updateOneToOneById = (id, cvName) => {
  const query =
    "SELECT p.personel_id,personel_cv_id FROM personel AS p WHERE p.personel_id = ?";
  connection.query(query, [id], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
    const cvId = res[0].personel_cv_id;
    const query =
      "UPDATE personel_cv SET personel_cv_ad = ? WHERE personel_cv_id = ?";
    connection.query(query, [cvName, cvId], (err, res) => {
      if (err) {
        console.log("err", err);
      }
      console.log("res", res);
    });
  });
};

//?Bire-Bir Tablosunda Id'ye Göre Veri Silme
const deleteOneToOneById = (id) => {
  const query =
    "SELECT p.personel_id,personel_cv_id FROM personel AS p WHERE p.personel_id = ?";
  connection.query(query, [id], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
    const cvId = res[0].personel_cv_id;
    const query = "DELETE FROM personel_cv WHERE personel_cv_id = ?";
  connection.query(query, [cvId], (err, res) => {
    if (err) {
      console.log("err", err);
    }
    console.log("res", res);
  });
  });
};

connection.connect((err) => {
  if (err) {
    console.log("hata", err);
  }
  console.log("bağlandı");
  // createDB()
  // createTable()
  // createRecord()
  // createMultipleRecord();
  // createDynamicRecord();
  // selectMyData();
  // findById(4)
  // findByName("Kerem");
  // findByNameWithId(6, "buse");
  // findByNameOrSurname("ali", "dolma");
  // deleteById(4);
  // updateById("buse", "kara", 9);
  // createOneToManyTable();
  // createOneToManyUser("kerem", "bilginer");
  // createSocialMediaWithUser()
  // getAllRelationsData();
  // getRelationsById(1);
  // updateOneToManyById("TWITTER",1,6)
  // deleteOneToManyById(2)
  // createOneToOneTable()
  // createOneToOneUser({ad:"Ali",soyad:"Kara",maas:"50.000₺"})
  // getAllRelationsData2()
  // updateOneToOneById(3,"Yeni Bir CV2");
  // deleteOneToOneById(3)
});
