const { Router } = require('express')

const router = Router()
// request - iltimos
// response - javob

const studentsNum = 932
const teachersNum = 754
const eventsNum = 40
const foodNum = 32

const recent_students = 456

const data = [{
id:0,
      name: "Nabila ",
    surname: "Azalea",
    place: "Jakarta, Indonesia",
    tel: "+12 345 6789 0",
    email: "jordan@mail.com"},


  {
    id: 1,
    logo_color: '#4d44b5',
    title: 'Students',
    text: studentsNum,
  },
  {
    id: 2,
    logo_color: '#FB7D5B',
    title: 'Teachers',
    text: teachersNum,
  },
  {
    id: 3,
    logo_color: '#FCC43E',
    title: 'Events',
    text: eventsNum,
  },
  {
    id: 4,
    logo_color: '#303972',
    title: 'Food',
    text: foodNum,
  },

]
router.get('/info', (req, res) => {
  res.send(data)
})

router.get('/recent_students', (req, res) => {
  res.send({count: recent_students})
})

const chartData = {
  data1: [25, 56, 60, 56, 90],
  data2: [50, 70, 10, 87, 23, 90],
}

router.get('/chart', (req, res) => {
  res.send(chartData)
})

module.exports = router


router.get('/', (req, res) => {
  res.send('Home page');
});

module.exports = router;