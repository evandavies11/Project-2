// Get references to page elements
var $bookTitle = $("#book-title");
var $borrower = $("#borrower");
//Use these variables when building past due alarm
var $checkout = $("#checkout-date");
var $dueDate = $("#due-date");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveBooks: function (dbBooks) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/books",
      data: JSON.stringify(dbBooks)
    });
  },
  getBooks: function () {
    return $.ajax({
      url: "api/books",
      type: "GET"
    });
  },
  deleteBooks: function (id) {
    return $.ajax({
      url: "api/books/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshBooks = function () {
  API.getBooks().then(function (data) {
    var $books = data.map(function (book) {
      var $a = $("<a>")
        .text(book.title)
        .attr("href", "/example/" + book.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": book.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($books);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var book = {
    title: $bookTitle.val().trim(),
    name_of_borrower: $borrower.val().trim(),
    date_borrowed: $checkout.val().trim(),
    due_date: $dueDate.val().trim()
  };

  if (
    !(
      book.title &&
      book.name_of_borrower &&
      book.date_borrowed &&
      book.due_date
    )
  ) {
    alert("Please enter the entire form");
    return;
  }

  API.saveBooks(book).then(function () {
    refreshBooks();
  });

  $bookTitle.val("");
  $borrower.val("");
  $checkout.val("");
  $dueDate.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteBooks(idToDelete).then(function () {
    refreshBooks();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
