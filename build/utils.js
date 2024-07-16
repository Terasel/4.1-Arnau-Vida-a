"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseTask = (taskFromRequest) => {
    if (!isString(taskFromRequest)) {
        throw new Error('Incorrect or missing task');
    }
    return taskFromRequest;
};
const parseCompletion = (completionFromRequest) => {
    if (!isBoolean(completionFromRequest)) {
        throw new Error('Incorrect or missing Completion status');
    }
    return completionFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isBoolean = (boolean) => {
    return typeof boolean === 'boolean';
};
const toNewTask = (object) => {
    const newEntry = {
        task: parseTask(object.task),
        completion: parseCompletion(object.completion)
    };
    return newEntry;
};
exports.default = toNewTask;
