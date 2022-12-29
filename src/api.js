// const express = require('express')
// const app = express()
// const cors = require("cors");
// const serverless = require('serverless-http')

// app.use(cors());

// app.use(express.json())
// app.use('/.netlify/functions', require('../routes/auth'))
// app.use('/.netlify/functions', require('../routes/home'))

// // app.listen(3001, ()=>console.log('Server has been started'))

// module.exports.handler = serverless(app)


const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);