const express = require("express");

const app = express();
const cors = require("cors");
const PORT = 4000
const TokenRoute = require("./routes/token");



app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/token", TokenRoute);

app.listen(`${PORT}`, () => {
    console.log(`server running at ${PORT} `);
  });
 




