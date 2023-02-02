const { Router } = require("express");
const admin = require("../config/admin");
const Admin = require('../models/admin')
const jwt = require("jsonwebtoken");
const auth = require("../models/admin");

const router = Router();

const adminData = {
  name: admin[0].name,
  surname: admin[0].surname,
  image: admin[0].image,
};

router.get("/", (req, res) => {
  Admin.find().then((result)=>{
    res.send(result)
   })
});

async function findEmail(email) {
  const adminEmail = admin.filter((admin) => admin.email === email);
  return adminEmail[0];
}

// Login Route
router.post("/login", async (req, res) => {
  const myAdmin = await findEmail(req.body.email);
  const password = myAdmin?.password == req.body.password;
  const token = jwt.sign({ _id: myAdmin?._id }, "9bThisIsMySecterToken!.", {
    expiresIn: "30d",
  });

  if (!myAdmin) {
    return res.status(400).json({ mgs: "Something went wrong!" });
  }

  if (!password) {
    return res.status(400).json({ mgs: "Something went wrong!" });
  }

  return res
    .header("x-auth-token", token)
    .status(200)
    .json({ msg: "You are logged in", token });
});

router.put("/settings", (req, res) => {
  const newAdminData = new Contact({
    name: req.body.name,
    surname: req.body.surname,
    image:req.body.image
  })
  const savedAdminData = newAdminData.save()
  console.log(savedAdminData);
  return res.header("x-auth-token",'').status(200).json(savedAdminData)
});

module.exports = router;