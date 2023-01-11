const express = require('express')
const router = express.Router()

const user = require('../controller/userController')

router.get('/get_user', user.getUser)
router.post('/create',user.createUser)
router.patch('/update/:id',user.updateUser)
router.delete('/delete/:id',user.deleteUser)

module.exports = router


