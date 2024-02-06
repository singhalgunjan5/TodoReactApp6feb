/* eslint-disable react/prop-types */
import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';



export default function Input({ addTodo }) {
    const [input,setInput] = useState("")
    function onchange(e)
    {
   
      setInput(e.target.value);
    }
    function handleSubmit()
    {
        addTodo(input);
        setInput("");
    }
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" >
        <TextField fullWidth label="Todo..." id="fullWidth" onChange={onchange}/>
        <Button variant="outlined" size="large" onClick={handleSubmit}>ADD</Button>
      </Box>
    </div>
  );
}
  