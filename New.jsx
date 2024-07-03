import { Button,Typography } from "@mui/material";
import React, { useState } from 'react';

const New = () => {
  var[data,setData] = useState("value")

  const home = ()=>{
    console.log("home ");
    setData("Home")
  };
  const Gal = ()=>{
    console.log("home ");
    setData("Gallery")
  };
  const con = ()=>{
    console.log("home ");
    setData("Contact")
  };
  return (
   <div style={{ marginLeft: "45%" ,marginTop: "10%", textAlign: "centre"}}>
     <Typography variant='h4' >Welcome to {data}</Typography> 
      <br />
      <br/>
      <Button variant="contained" onClick={home}>
        Home
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" color="secondary" >Gallery</Button>&nbsp;&nbsp;
      <Button variant="contained" color="error" >Contact</Button>
    </div>
  );
};

export default New
