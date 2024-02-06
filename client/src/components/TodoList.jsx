import React from "react";
import Input from "./Input";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";

import IconButton from "@mui/material/IconButton";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  function handledelete(index)
  {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }
  return (
    <>
      <Input addTodo={addTodo}></Input>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo, index) => (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemText
              primary={todo}
              color="primary"
            />
           <ListItemAvatar onClick={() => handledelete(index)}>

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
