const Task = require('../models/Task')
const {error,success} = require('../utils/responseWapper')
 
const createTask = async (req,res) => {
    try {
        const task = new Task({ ...req.body, userid: req._id });
        await task.save();
        return res.send(success(201, 'Task created successfully'));
    } catch (e) {
        return res.send(error(500, e));
    }
}


const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find({ userid: req._id });
        return res.send(success(200, tasks));
    } catch (e) {
        return res.send(error(500, e));
    }
}


const updateTask = async (req,res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id, userid: req._id }, req.body, { new: true });
        return res.send(success(200, task));
    } catch (e) {
        return res.send(error(500, e));
    }
}

const deleteTask = async (req,res) => {
    try {
        await Task.findOneAndDelete({ _id: req.params.id, userid: req._id });
        return res.send(success(201, 'Task deleted successfully'));
    } catch (e) {
        return res.send(error(500, e));
    }
}


module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}


