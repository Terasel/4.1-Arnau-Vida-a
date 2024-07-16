"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTasks = exports.findById = void 0;
const tasks_json_1 = __importDefault(require("./tasks.json"));
const tasks = tasks_json_1.default;
const findById = (id) => {
    const entry = tasks.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const getTasks = () => {
    return tasks.map(({ id, completion, task }) => {
        return {
            id,
            completion,
            task
        };
    });
};
exports.getTasks = getTasks;
const addTask = (newTask) => {
    const newTaskText = Object.assign({ id: Math.max(...tasks.map(d => d.id)) + 1 }, newTask);
    tasks.push(newTaskText);
    return newTaskText;
};
exports.addTask = addTask;
const updateTask = (id) => {
    const updatedTask = tasks.find(d => d.id === id);
    if (updatedTask != null) {
        updatedTask.completion = true;
    }
    return updatedTask;
};
exports.updateTask = updateTask;
const deleteTask = (id) => {
    const deletedTask = tasks.findIndex(d => d.id === id);
    if (deletedTask !== -1) {
        tasks.splice(deletedTask, 1);
    }
};
exports.deleteTask = deleteTask;
