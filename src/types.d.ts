import { Completion } from './enums'

export interface Task {
    id: number
    completion: Completion
    task: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type TaskIndex = Omit<Task, 'task'>
export type NewTask = Omit<Task, 'id'>