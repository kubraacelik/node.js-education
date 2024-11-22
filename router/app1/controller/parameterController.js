const Index = (req, res) => {
    const data = {
        title: "Parameter Page",
        min: 10,               
        max: 100              
    };
    // parameter.ejs'yi render etti
    res.render("parameter", data);
};


module.exports = {
  Index,
};
