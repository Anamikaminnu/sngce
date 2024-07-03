import { CardContent, CardMedia, Typography, Grid , Card } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

const GridCard = () => {
  var [pro, setPro] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/jewelery").then((res)=>{
      setPro(res.data)
    }).catch((error)=>{
      console.log(error)
    }),[]})
  return (
    <div>
      <Grid container spacing={2}>
      {pro.map((values)=>{
        return(
          <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={values.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {values.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {values.description}
          </Typography>
        </CardContent>
        </Card>
        )
        
      })}
      
      </Grid>
    </div>
  )
    
}

export default GridCard
