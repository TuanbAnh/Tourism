const db = require("../config/database");

exports.getAllTodos = function (callback) {
  db.query("SELECT * FROM tourism", callback);
};

exports.getTodoById = function (id, callback) {
  db.query("SELECT * FROM tourism WHERE type_tour = ?", [id], callback);
};

exports.createTodo = function (newTodo, callback) {
  db.query("INSERT INTO tourism SET ?", newTodo, callback);
};

exports.updateTodo = function (id, updatedTodo, callback) {
  db.query("UPDATE tourism SET ? WHERE id = ?", [updatedTodo, id], callback);
};

exports.deleteTodo = function (id, callback) {
  db.query("DELETE FROM tourism WHERE id = ?", [id], callback);
};
