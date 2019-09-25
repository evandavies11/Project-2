var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.books.findAll({}).then(function(dbBooks) {
      res.json(dbBooks);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.books.create(req.body).then(function(dbBooks) {
      res.json(dbBooks);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.books.destroy({ where: { id: req.params.id } }).then(function(dbBooks) {
      res.json(dbBooks);
    });
  });
};
