const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const project = require("./routes/project")
app.use("/project",project)

app.listen(6000, () => {
    console.log("server is listening 6000.........")
});