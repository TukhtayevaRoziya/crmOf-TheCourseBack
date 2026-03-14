const { Router } = require("express");
const Teachers = require("../models/teachersModal");

// const jwt = require("jsonwebtoken");

const router = Router();
 const students = [
  {
    id: 1,
    fullName: "Tukhtayeva Roziya",
    class: "VII 3",
    amount: "$ 30,036",
    payment: false,
  },
  {
    id: 2,
    fullName: "Alex Alex",
    class: "VII 4",
    amount: "$ 60,036",
    payment: false,
  },
  {
    id: 3,
    fullName: "John Surname",
    class: "VII 8",
    amount: "$ 90,036",
    payment: false,
  },
  {
    id: 4,
    fullName: "Falonchiyev Falonchi",
    class: "VII 1",
    amount: "$ 10,036",
    payment: false,
  },
  {
    id: 5,
    fullName: "Alejandro Martín",
    class: "VII 9",
    amount: "$ 50,980",
    payment: false,
  },
  {
    id: 6,
    fullName: "Agnieszka Murdoch",
    class: "VII 2",
    amount: "$ 57,036",
    payment: false,
  },
  {
    id: 7,
    fullName: "Einar Montalvo",
    class: "VII 7",
    amount: "$ 34,036",
    payment: false,
  },
  {
    id: 8,
    fullName: "Михаил Русаков",
    class: "VII 7",
    amount: "$ 89,036",
    payment: false,
  },
  {
    id: 9,
    fullName: "Sarah Martín",
    class: "VII 7",
    amount: "$ 56,036",
    payment: false,
  },
  {
    id: 10,
    fullName: "Михаил Montalvo",
    class: "VII 7",
    amount: "$ 190,036",
    payment: false,
  },
  {
    id: 11,
    fullName: "Михаил Montalvo",
    class: "VII 7",
    amount: "$ 190,036",
    payment: true,
  },
  {
    id: 12,
    fullName: "Михаил Montalvo",
    class: "VII 7",
    amount: "$ 190,036",
    payment: true,
  },
];
router.get("/", (req, res) => {
  res.send(students);
  // Teachers.find().then((result) => {
  //   res.send(result);
  // });
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
