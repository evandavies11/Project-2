var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.books.findAll({}).then(function(dbBooks) {
      res.render("userpage", {
        msg: "Welcome!",
        books: dbBooks
      });
    });
  });

  app.get("/home", function(req, res) {
    db.books.findAll({}).then(function(dbBooks) {
      res.render("index", {
        msg: "Welcome!",
        books: dbBooks
      });
    });
  });

  // Loads one book in particular and displays details in a card
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
