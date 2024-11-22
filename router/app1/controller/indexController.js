const Index = (req, res) => {
  // index.ejs'yi render etti
  res.render("index", {
    title: "Anasayfa",
    number: 27,
    isActive: true,
    myArr: [{ id: "Ali" }, { id: "Ayşe" }],
  });
};

const getParameters = (req, res) => {
  console.log(req.params, req.query);
  res.render("parameter", {
    title: "Parameter",
    min: req.query.min,
    max: req.query.max,
  });
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
