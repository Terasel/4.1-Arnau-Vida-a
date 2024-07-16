
import { Task, NewTask, TaskIndex } from '../types'
import taskData from './tasks.json'

const tasks: Task[] = taskData as Task[]

export const findById = (id: number): Task | undefined => {
    const entry = tasks.find(d => d.id === id)
    return entry
}

export const getTasks = (): TaskIndex[] => {
    return tasks.map(({ id, completion, task }) => {
        return {
            id,
            completion,
            task
        }
    })
}

export const addTask = (newTask: NewTask): Task => {
    const newTaskText = {
        id: Math.max(...tasks.map(d => d.id)) + 1,
        ...newTask
    }
    tasks.push(newTaskText)
    return newTaskText
}

export const updateTask = (id: number): Task | undefined => {
    const updatedTask = tasks.find(d => d.id === id)
    if (updatedTask != null) {
        updatedTask.completion = true
    }
    return updatedTask
}

export const deleteTask = (id: number): void => {
    const deletedTask = tasks.findIndex(d => d.id === id)
    if (deletedTask !== -1) {
        tasks.splice(deletedTask, 1)
    }
}
