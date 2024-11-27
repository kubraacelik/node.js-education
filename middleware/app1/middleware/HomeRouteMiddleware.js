module.exports = (req, res, next) => {
  if (Number(req.query.id) === 3) {
    next();
  } else {
    res.send("id'si 3 olan kullanıcılar girebilir");
  }
};
