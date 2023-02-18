const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require("cors");

app.use(cors());

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://roziya:sololearn@cluster0.2qyrdel.mongodb.net/crmOfCourse", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to Mongodb database...");
});

app.use(express.json())
app.use('/', require('./routes/auth'))
app.use('/', require('./routes/home'))
app.use('/students', require('./routes/students'))
app.use('/teachers', require('./routes/teachers'))

app.listen(3001, ()=>console.log('Server has been started'))