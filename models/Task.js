const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    duedate: {
        type: Date,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
})

module.exports = mongoose.model("task",taskSchema)