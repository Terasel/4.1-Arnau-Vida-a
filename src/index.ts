import express from 'express'
import taskRouter from './routes/tasks'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('someone pinged here')
    res.send('pong')
})

app.use('/api/tasks', taskRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
