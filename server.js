const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const routes = require("./controllers/burgersControllers.js");

app.use(routes);
app.use(express.static("./public"));


app.listen(PORT, function() {
	console.log(`App listening on http://localhost:${PORT}`);
});