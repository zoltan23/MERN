const Client = require('../models/client-model.js')

createClient = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a client information.',
        })
    }

    const client = new Client(body)

    if (!client) {
        return res.status(400).json({ success: false, error: err })
    }

    client
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: client._id,
                message: 'Client created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Client not created!',
            })
        })
}

updateClient = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Client.findOne({ _id: req.params.id }, (err, client) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'client not found!',
            })
        }
        client.name = body.name
        client.time = body.time
        client.rating = body.rating
        client
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: client._id,
                    message: 'client updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'client not updated!',
                })
            })
    })
}




module.exports = {
    createClient,
    updateClient,
}