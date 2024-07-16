"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskServices = __importStar(require("../services/taskServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(taskServices.getTasks());
});
router.get('/:id', (req, res) => {
    const tasklist = taskServices.findById(+req.params.id);
    return (tasklist != null)
        ? res.send(tasklist)
        : res.sendStatus(404);
});
router.post('/', (req, res) => {
    try {
        const newTask = (0, utils_1.default)(req.body);
        const addedTask = taskServices.addTask(newTask);
        res.json(addedTask);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
router.put('/:id', (req, res) => {
    const updatedTask = taskServices.updateTask(+req.params.id);
    return (updatedTask != null)
        ? res.send(updatedTask)
        : res.sendStatus(404);
});
router.delete('/:id', (req, res) => {
    const deletedTask = taskServices.deleteTask(+req.params.id);
    return (deletedTask != null)
        ? res.sendStatus(400)
        : res.sendStatus(204);
});
exports.default = router;
