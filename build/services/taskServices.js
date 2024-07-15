"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.getTasks = exports.findById = void 0;
const tasks_json_1 = __importDefault(require("./tasks.json"));
const tasks = tasks_json_1.default;
const findById = (id) => {
    const entry = tasks.find(d => d.id === id);
    if (entry != null) {
        const { task } = entry, restOfTask = __rest(entry, ["task"]);
        return restOfTask;
    }
    return undefined;
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
