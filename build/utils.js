"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseTask = (taskFromRequest) => {
    if (!isString(taskFromRequest)) {
        throw new Error('Incorrect or missing task');
    }
    return taskFromRequest;
};
const parseCompletion = (completionFromRequest) => {
    if (!isString(completionFromRequest) || !isComplete(completionFromRequest)) {
        throw new Error('Incorrect or missing Completion status');
    }
    return completionFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isComplete = (param) => {
    return Object.values(enums_1.Completion).includes(param);
};
const toNewTask = (object) => {
    const newEntry = {
        task: parseTask(object.task),
        completion: parseCompletion(object.completion)
    };
    return newEntry;
};
exports.default = toNewTask;
