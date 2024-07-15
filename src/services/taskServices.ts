
import { Task, NewTask, TaskIndex } from '../types'
import taskData from './tasks.json'

const tasks: Task[] = taskData as Task[]

export const findById = (id: number): TaskIndex | undefined => {
    const entry = tasks.find(d => d.id === id)
    if (entry != null) {
        const { task, ...restOfTask } = entry
        return restOfTask
    }
    return undefined
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

export const updateTask = (id: number) => {
    const updatedTask = tasks.find(d => d.id === id)

    if (updatedTask.completion = false) {
        return
    }
    return undefined
}

export const deleteTask = () => {

}