const cors = require('cors');
const { urlencoded } = require('express');
const express = require('express'); 
const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());
const path = require('path');
//const bodyParser = require('body-parser');

const todoRoute = require('./routes/todoRoute');

app.use('/api', todoRoute);
app.use((req,res)=>{
    res.status(404).send('Page not found');
});

app.listen(3000, () =>{
    console.log('express  server running in port 3000');
    });