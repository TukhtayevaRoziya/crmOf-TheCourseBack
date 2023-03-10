const { Router } = require("express");
const Teachers = require("../models/teachersModal");

// const jwt = require("jsonwebtoken");

const router = Router();

router.get("/", (req, res) => {
  // res.send(students);
  Teachers.find().then((result) => {
    res.send(result);
  });
});

router.post("/add", (req, res) => {
  const newTeacherData = new Teachers(req.body);
  const savedTeacherData = newTeacherData.save();
  savedTeacherData.then(function (result) {
    res.json(result);
  });

  // jwt.verify(req.body.token, "shhhhh", function (err, decoded) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(decoded)
  //   res.send('decoded')
  // });
});

module.exports = router;
