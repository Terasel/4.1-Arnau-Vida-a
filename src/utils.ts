import { NewTask } from "./types";
import { Completion } from './enums'

const parseTask = (taskFromRequest: any): string => {
    if (!isString(taskFromRequest)) {
        throw new Error('Incorrect or missing task')
    }

    return taskFromRequest
}

const parseCompletion = (completionFromRequest: any): Completion => {
    if (!isString(completionFromRequest) || !isComplete(completionFromRequest)) {
        throw new Error('Incorrect or missing Completion status')
    }

    return completionFromRequest
}


const isString = (string: string): boolean => {
    return typeof string === 'string'
}


const isComplete = (param: any): boolean => {
    return Object.values(Completion).includes(param)
}

const toNewTask = (object: any): NewTask => {
    const newEntry: NewTask = {
        task: parseTask(object.task),
        completion: parseCompletion(object.completion)
    }

    return newEntry
}

export default toNewTask
