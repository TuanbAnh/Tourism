const Todo = require("../models/todo");
const XLSX = require("xlsx");

exports.getAllTodos = function (req, res) {
  Todo.getAllTodos((err, todos) => {
    if (err) throw err;
    res.json(todos);
  });
};

exports.getTodoById = function (req, res) {
  Todo.getTodoById(req.params.id, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};

exports.createTodo = function (req, res) {
  const newTodo = {
    name: req.body.name,
    time: req.body.time,
    price: req.body.price,
    vehcel: req.body.vehcel,
    type_tour: req.body.type_tour,
    img: req.body.img,
  };

  Todo.createTodo(newTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: "Todo created successfully" });
  });
};

exports.updateTodo = function (req, res) {
  const updatedTodo = {
    name: req.body.name,
    time: req.body.time,
    price: req.body.price,
    vehcel: req.body.vehcel,
    type_tour: req.body.type_tour,
    img: req.body.img,
  };

  Todo.updateTodo(req.params.id, updatedTodo, (err, _result) => {
    if (err) throw err;
    res.json({ message: "Todo updated successfully" });
  });
};

exports.deleteTodo = function (req, res) {
  Todo.deleteTodo(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: "Todo deleted successfully" });
  });
};
