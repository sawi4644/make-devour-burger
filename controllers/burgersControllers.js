
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(request, response) {
  burger.select(function(data) {
    response.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(request, response) {
  burger.insert(request.body.burgerName, function(data) {
    console.log(data)
    response.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", function(request, response) {
  burger.update(request.body.devoured, request.params.id, function(data) {
    if (data.affectedRows === 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

// exports router
module.exports = router;