const Book = require("../models/books");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookInstance");

const async = require("async");

exports.index = (req, res) => {
  async.parallel(
    {
      book_count(callback) {
        Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      book_instance_count(callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count(callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count(callback) {
        Author.countDocuments({}, callback);
      },
      genre_count(callback) {
        Genre.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    }
  );
};

exports.book_create_get = (req, res) => {
  res.send("Not implemented, Book create get");
};
exports.book_create_post = (req, res) => {
  res.send("Not implemented, Book create get");
};
exports.book_delete_get = (req, res) => {
  res.send("Not implemented, Book create get");
};
exports.book_delete_post = (req, res) => {
  res.send("Not implemented, Book create get");
};
exports.book_update_get = (req, res) => {
  res.send("Not implemented, Book create get");
};
exports.book_update_post = (req, res) => {
  res.send("Not implemented, Book create get");
};
exports.book_detail = (req, res) => {
  res.send("Not implemented, Book create get");
};
exports.book_list = (req, res, next) => {
  Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec(function (err, list_book) {
      if (err) {
        return next(err);
      }
      res.render("book_list", { title: "Book List", book_list: list_book });
    });
};
