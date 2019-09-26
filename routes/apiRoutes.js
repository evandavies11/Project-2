var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/books", function(req, res) {
    db.books.findAll({}).then(function(dbBooks) {
      res.json(dbBooks);
    });
  });

  // Create a new example
  app.post("/api/books", function(req, res) {
    db.books.create(req.body).then(function(dbBooks) {
      res.json(dbBooks);
    });
  });

  // Delete an example by id
  app.delete("/api/books/:id", function(req, res) {
    db.books.destroy({ where: { id: req.params.id } }).then(function(dbBooks) {
      res.json(dbBooks);
    });
  });
};
