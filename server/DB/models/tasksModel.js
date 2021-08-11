const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = Schema.Types


const task = new Schema({
    desc: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    worker: {
        type: ObjectId,
        required: true,
        ref: "houseMembers"
    },
})

const TaskModel = mongoose.model("tasks", task)

module.exports = TaskModel