const express = require('express')
const app = express()
const cors = require("cors");

app.use(cors());

app.use(express.json())
app.use('/', require('./routes/auth'))
app.use('/', require('./routes/home'))
app.use('/students', require('./routes/students'))

app.listen(3001, ()=>console.log('Server has been started'))