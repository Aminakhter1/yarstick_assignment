
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path =require("path");


const transactionRoutes = require('./routes/transactions');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionRoutes);



mongoose.connect("mongodb+srv://aminakhter1166:iKC3ZCtHscD3ahXu@cluster0.nhwmuoj.mongodb.net/webknot", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log(err));
