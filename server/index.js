const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

mongoose.connect(
  "mongodb+srv://singhalgunjan10:8ZOtJGM561gSSSWR@cluster0.8zfohi7.mongodb.net/6Feb"
);

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Todo = mongoose.model("Todo", todoSchema);

app.get("/", (req, res) => {
  res.send("hey");
});
app.get("/api/todo", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.sendStatus(500);
  }
});
app.post("/api/todo", async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await Todo.create({ text });
    console.log(text);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.sendStatus(500);
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (deletedTodo) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.sendStatus(500);
  }
});
app.listen("3000", (req, res) => {
  console.log("server is running on port 3000");
});
