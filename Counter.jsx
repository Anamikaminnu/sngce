import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount] = useState(0);
    const inputHandler = (e) => {
      console.log("inc clicked");
      setCount(++count)
    };
    const changeCount = (f) => {
      console.log("btn clicked");
      setCount(--count)
    };
  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
      <Typography variant='h1' Style={{ marginleft: "5%"}}>
       {count}
      </Typography> 
      <br />
      <br />
      <Button variant='contained' color="success" onClick={inputHandler}>
        +
        </Button>
        &nbsp;&nbsp;
       <Button variant='contained' color="error" onClick={changeCount}>
        -
      </Button>
    </div>
  )
}

export default Counter
