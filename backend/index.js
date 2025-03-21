const express = require("express");
const postsRouter = require("./routes/index");

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", postsRouter);

app.listen(PORT, () => {
  console.log("Server Running on PORT: " + PORT + "!!");
});