const express = require("express");
const bodyParser = require("body-parser");
const dialogflow = require("dialogflow");

const app = express();
app.use(bodyParser.json());

require("./routes/dialogFlowRoutes")(app);
//app will not be avaialbe in dialogflowroutes file

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app launched on port ${PORT}`);
});
