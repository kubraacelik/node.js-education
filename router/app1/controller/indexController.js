const Index = (req, res) => {
  res.sendFile("C:\\Users\\hp\\nodejs-egitim\\router\\app1\\" + "/index.html");
};

const getParameters = (req, res) => {
  console.log(req, params, req.query);
  res.sendFile(
    "C:\\Users\\hp\\nodejs-egitim\\router\\app1\\" + "/parameter.html"
  );
};

const Post = (req, res) => {
  res.status(201).json({ message: "Başarılı" });
};

const Put = (req, res) => {
  res.json({ message: "Güncelleme Başarılı" });
};

const Delete = (req, res) => {
  res.json({ message: "Silme Başarılı" });
};

module.exports = {
  Index,
  getParameters,
  Post,
  Put,
  Delete,
};
