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
});
