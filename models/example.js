module.exports = function(sequelize, DataTypes) {
  var books = sequelize.define("books", {
    title: DataTypes.STRING,
    name_of_borrower: DataTypes.TEXT,
    date_borrowed: DataTypes.DATEONLY,
    due_date: DataTypes.DATEONLY,
    createdAt: DataTypes.DATEONLY
  });
  return books;
};
