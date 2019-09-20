var moment = require("moment");
moment().format();
//$("#checkout").trim().val()
//$("#dueDate").trim().val()
var daysLeft = "MM-DD-YYYY";
var showDaysLeft = function() {
  var checkoutDate = moment("09-19-2019", "MM-DD-YYYY");
  //in real app pull these dates from the database
  var dueDate = moment("09-20-2019", "MM-DD-YYYY");
  //in real app pull these dates from the database
  daysLeft = moment(dueDate).diff(checkoutDate, "days");
  console.log(daysLeft);
};

showDaysLeft();
