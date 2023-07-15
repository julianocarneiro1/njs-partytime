const { Party: PartyModel } = require("../models/Party")

const isPartyBudgetEnough = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0)

    if(budget > priceSum){
        return true
    }

    return false
}

const partyController = {
    create: async(req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }

            if(party.services && !isPartyBudgetEnough(party.budget, party.services)) {
                res.status(406).json({msg: 'Not enough budget.'})
                return
            }

            const response = await PartyModel.create(party)
            res.status(201).json({response, msg: 'Party successfully created!'})
        } catch (error) {
            console.log(error)
        }
    }    
}

module.exports = partyController