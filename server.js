const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

const uri =
  "mongodb+srv://root:Tyguy2000@cluster0.z3viq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
