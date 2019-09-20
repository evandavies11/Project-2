var moment = require("moment");
moment().format();
var db = require("./index");
//$("#checkout").trim().val()
//$("#dueDate").trim().val()
var daysLeft = "MM-DD-YYYY";
var showDaysLeft = function() {
  for (var i = 0; i < db.length; i++) {
    var checkoutDate = moment(db.i.date_borrowed, "MM-DD-YYYY");
    //in real app pull these dates from the database
    var dueDate = moment(db.i.due_date, "MM-DD-YYYY");
    //in real app pull these dates from the database
    daysLeft = moment(dueDate).diff(checkoutDate, "days");
    console.log(daysLeft);
  }
};

showDaysLeft();
