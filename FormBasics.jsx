import { TextField } from "@mui/material";
import React, { useState } from'react'

const FormBasics = () => {
    var[inputs,setInputs] = useState({ username:"",email:"",place:''});

    const InputHandler = (e) => {
        console.log(e.target.value);
        setInputs({...inputs, [e.target.name]: e.target.value });
        console.log(inputs);
    };
    return (
    <div style={{ marginTop: "10%", marginLeft: "45%" }}>
        <TextField
        variant="outlined"
        label="Username"
        onChange={InputHandler}
        name="username"
        value={inputs.username}

    />
        <br />
        </div>
    )
}
export default FormBasics