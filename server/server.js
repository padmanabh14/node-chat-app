
const path = require('path');

const port = process.env.PORT||3000;
const express = require('express');

const publicPath = path.join(__dirname,'../public');

var app = express();


app.use(express.static(publicPath));




app.listen(port,()=>{

  console.log(`Server up on ${port}`);
})
