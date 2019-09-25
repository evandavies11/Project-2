var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    db.books.findAll({}).then(function(dbBooks) {
      res.render("userpage", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  app.get("/home", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {

      res.render("index", {
        msg: "Welcome!",
        books: dbBooks
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.books.findOne({ where: { id: req.params.id } }).then(function(dbBooks) {
      res.render("books", {
        books: dbBooks
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
