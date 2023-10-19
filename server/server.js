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
//creating a schema for users
const User = mongoose.model('User',{
    firstName:String,
    lastName:String,
    contactNumber:String,
    Email:{ type: String, unique: true },
    password:String,
    passwordAgain:String,
})




app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:"all good"
    })
})



app.post('/api/register', async(req, res) => {
    try{
    const { firstName, lastName, contactNumber, email, password ,confirmPassword} = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Password and confirm password do not match' });
      }
    const user = new User({
        firstName,
        lastName,
        contactNumber,
        Email: email, 
        password,
        passwordAgain:confirmPassword, 
      });
      
    await user.save();

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
  });

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log(`server runnning on http://localhost:${process.env.PORT}`)
    }).catch(error =>console.log(error))
  
})

