import { NewTask } from "./types";


const parseTask = (taskFromRequest: any): string => {
    if (!isString(taskFromRequest)) {
        throw new Error('Incorrect or missing task')
    }

    return taskFromRequest
}

const parseCompletion = (completionFromRequest: any): boolean => {
    if (!isBoolean(completionFromRequest)) {
        throw new Error('Incorrect or missing Completion status')
    }

    return completionFromRequest
}


const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isBoolean = (boolean: boolean): boolean => {
    return typeof boolean === 'boolean'
}


const toNewTask = (object: any): NewTask => {
    const newEntry: NewTask = {
        task: parseTask(object.task),
        completion: parseCompletion(object.completion)
    }

    return newEntry
}

export default toNewTask
