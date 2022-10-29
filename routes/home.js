const { Router } = require('express')

const router = Router()
// request - iltimos
// response - javob

const studentsNum = 932
const teachersNum = 932
const eventsNum = 932
const foodNum = 932

router.get('/', (req, res)=>{
  res.send({
    studentsNum,
    teachersNum,
    eventsNum,
    foodNum
  })
})

module.exports = router