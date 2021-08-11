const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = Schema.Types


const houseMember = new Schema({
    name: {
        type: String,
        required: true
    },
    nick: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    color: {
        type:String,
        deafult: "#444a60"
    }
})

const HouseMemberModel = mongoose.model("houseMembers", houseMember)

module.exports = HouseMemberModel