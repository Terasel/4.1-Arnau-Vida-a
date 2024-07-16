export interface Task {
    id: number
    completion: boolean
    task: string
}

export type TaskIndex = Omit<Task, 'task'>

export type NewTask = Omit<Task, 'id'>
