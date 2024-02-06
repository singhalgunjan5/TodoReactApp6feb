import React, { useState, useEffect } from "react";
import Input from "./Input";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const backendUrl = "http://localhost:3000";
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get(`${backendUrl}/api/todo`);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, [todos]);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  async function handledelete(id) {
    // alert(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    await axios.delete(`${backendUrl}/api/todos/${id}`);
  }
  return (
    <>
      <Input addTodo={addTodo}></Input>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo, index) => (
            <ListItem alignItems="flex-start" key={index}>
              <ListItemText primary={todo.text} color="primary" />
              <ListItemAvatar onClick={() => handledelete(todo._id)}>
                <Avatar>
                  <DeleteIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}
