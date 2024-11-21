const express = require("express");
const app = express();
const appRouter = require("./router/router")

app.use(appRouter);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
