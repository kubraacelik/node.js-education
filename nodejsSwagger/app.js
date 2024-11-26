const express = require("express");
const app = express();
const router = express.Router();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

let myData = [
  {
    id: 1,
    team: "Beşiktaş",
  },
  {
    id: 2,
    team: "Galatasaray",
  },
  {
    id: 3,
    team: "Fenerbahçe",
  },
  {
    id: 4,
    team: "Gaziantepspor",
  },
];

router.get("/list", (req, res) => {
    res.status(200).json(myData);
  });
  

router.post("/create", (req, res) => {
  const { team } = req.body;
  const newData = {
    id: myData.length + 1,
    team,
  };
  myData.push(newData);
  res.status(200).json(newData);
});

router.delete("/delete/:id", (req, res) => {
  const deleteIndex = myData.findIndex(
    (data) => data.id === parseInt(req.params.id, 10)
  );

  if (deleteIndex === -1) {
    return res.status(404).json({ message: "Team not found" });
  }

  const deletedData = myData.splice(deleteIndex, 1);

  res
    .status(200)
    .json({ message: "Team deleted successfully", deleted: deletedData[0] });
});

router.put("/update/:id", (req, res) => {
  const updateData = myData.find((data) => data.id === parseInt(req.params.id));

  if (!updateData) {
    return res.status(404).json({ message: "Team not found" });
  }

  const { team } = req.body;

  updateData.team = team || updateData.team;
  res.status(200).json(updateData);
});

router.use("/my-api-docs", swaggerUI.serve);
router.use("/my-api-docs", swaggerUI.setup(swaggerDocument));

app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("running on http://localhost:5000");
});
