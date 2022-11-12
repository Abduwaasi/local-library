const Author = require("../models/author");

exports.author_list = (req, res) => {
  res.send("Not implemented: Author list");
};

// Display details page for a specific author
exports.author_details = (req, res) => {
  res.send(`Not Implemented: Author details ${req.params.id}`);
};

// Display author create form on get

exports.author_create_get = (req, res) => {
  res.send("Not implemented: Author create get");
};

exports.author_create_post = () => {
  res.send("Not implemented: Author create pose");
};

exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
