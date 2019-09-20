var moment = require("moment");
moment().format();
//$("#checkout").trim().val()
//$("#dueDate").trim().val()
var showDaysLeft = function() {
  var checkoutDate = moment("09-19-2019", "MM-DD-YYYY");
  var dueDate = moment("09-20-2019", "MM-DD-YYYY");
  var daysLeft = moment(checkoutDate).diff(dueDate, "days");
  console.log(daysLeft);
};

showDaysLeft();
