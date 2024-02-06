/* eslint-disable react/prop-types */
import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Input({ addTodo }) {
  const [input, setInput] = useState("");

  const backendUrl = "http://localhost:3000";

  function onchange(e) {
    setInput(e.target.value);
  }
  async function handleSubmit() {
    //  alert(`${backendUrl}/api/todo`)

    const response = await axios.post(`${backendUrl}/api/todo`, {
      text: input,
    });
    console.log("Todo created:", response.data);
    addTodo({ text: input });
    setInput("");
  }
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <TextField
          fullWidth
          label="Todo..."
          id="fullWidth"
          onChange={onchange}
        />
        <Button variant="outlined" size="large" onClick={handleSubmit}>
          ADD
        </Button>
      </Box>
    </div>
  );
}
