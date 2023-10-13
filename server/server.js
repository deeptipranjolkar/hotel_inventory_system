const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const ejs = require('ejs');
const cors = require('cors');
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:"all good"
    })
})

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log(`server runnning on http://localhost:${process.env.PORT}`)
    }).catch(error =>console.log(error))
  
})

