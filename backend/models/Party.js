const mongoose = require("mongoose")
const { serviceSchema } = require("./Service")

const { Schema } = mongoose

const partySchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        description: {
            type: number,
            required: true
        },
        budget: {
            type: number,
            required: true
        },
        services: {
            type: [serviceSchema]
        }
    },
    { timestamps: true }
)

const Party = mongoose.model('Party', partySchema)

module.exports = {
    Party
}