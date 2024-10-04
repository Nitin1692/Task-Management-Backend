const express = require("express")
const router = express.Router()
const auth = require('../middlewares/requireAuth')
const task = require('../controllers/taskController')

router.post('/tasks',auth,task.createTask)
router.get('/tasks',auth,task.getTasks)
router.put('/tasks/:id',auth,task.updateTask)
router.delete('/tasks/:id',auth,task.deleteTask)

module.exports = router