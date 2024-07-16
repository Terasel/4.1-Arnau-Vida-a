import express from "express"
import * as taskServices from '../services/taskServices'
import toNewTask from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(taskServices.getTasks())
})

router.get('/:id', (req, res) => {
    const tasklist = taskServices.findById(+req.params.id)

    return (tasklist != null)
        ? res.send(tasklist)
        : res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
        const newTask = toNewTask(req.body)

        const addedTask = taskServices.addTask(newTask)

        res.json(addedTask)
    } catch (e) {
        res.status(400).send(e.message)
    }

})



router.put('/:id', (req, res) => {
    const updatedTask = taskServices.updateTask(+req.params.id)

    return (updatedTask != null)
    ? res.send(updatedTask)
    : res.sendStatus(404)
    
})

router.delete('/:id', (req, res) => {
    const deletedTask = taskServices.deleteTask(+req.params.id)

    return (deletedTask != null)
    ? res.sendStatus(400)
    : res.sendStatus(204)
})

export default router