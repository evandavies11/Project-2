var moment = require("moment");
moment().format();
//var fs = require("fs");
/* var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
} */

//$("#checkout").trim().val()
//$("#dueDate").trim().val()
var daysLeft = "MM-DD-YYYY";
var showDaysLeft = function(dueDate) {
  //for (var i = 0; i < db.length; i++) {
  var today = moment();
  //in real app pull these dates from the database
  dueDateFormatted = moment(dueDate, "MM-DD-YYYY");
  //in real app pull these dates from the database
  daysLeft = moment(dueDateFormatted).diff(today, "days");
  console.log(daysLeft);
  //}
};

module.exports = showDaysLeft;
