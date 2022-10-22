const { Router } = require('express')
const admin = require('../config/admin')

const router = Router()

router.get('/', (req, res) => {
  res.json(admin)
})

async function findEmail(email) {
  const adminEmail = admin.filter((admin) => admin.email === email)
  return adminEmail[0]
}

// Login Route
router.post('/login', async (req, res) => {
  const admin = await findEmail(req.body.email)
  const password = admin.password === req.body.password

  if (!admin) {
    return res.status(400).json({ mgs: 'Something went wrong!' })
  }

  if (!password) {
    return res.status(400).json({ mgs: 'Something went wrong!' })
  }

  return res.status(200).json({ msg: 'You are logged in' })
})

module.exports = router
