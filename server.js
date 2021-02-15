const express= require("express");
const exphbs= require("express-handlebars")
const mysql= require("mysql")

const app= express();

var PORT = process.env.PORT || 8080;


app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());