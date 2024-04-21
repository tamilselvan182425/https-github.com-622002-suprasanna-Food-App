const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');

require('dotenv').config();

const Orders = require ('./modals/Form.modal');

const app = express();

const URL = process.env.ATLAS_URL;

app.use(cors())

app.use(express.json())
mongoose.set('strictQuery', false);

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;

connection.once('open',() => {
    console.log('mongoose db connected successfully...!!!')
})


app.post('/Orders',async(req,res) =>{
    const {UserName,phoneNumber,email,address,LandMark,PinCode} = req.body;
   const newOrders = new Orders({UserName,phoneNumber,email,address,LandMark,PinCode});

   await newOrders.save();
})






app.listen("8001", () => {
    console.log("Server is running on port 8001");
  });