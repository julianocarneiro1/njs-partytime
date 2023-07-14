const mongoose = require("mongoose")

async function main() {
    try {
        await mongoose.connect("mongodb+srv://juliano:<password>@cluster0.fvzak1w.mongodb.net/?retryWrites=true&w=majority")
        console.log('db connected')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main