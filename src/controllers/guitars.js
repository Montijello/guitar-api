const models = require('../models/guitars')

function getAll(req, res, next) {
    const data = models.getAll()
    res.status(200).json(data)
}

function getOne(req, res, next) {
    const id = req.params.id
    const result = models.getOne(id)

    if (result.errors) {
        return next({ status: 400, error: { message: result.errors } })
    }

    res.status(200).json({ data: result })
}

function create(req, res, next) {
    const result = models.create(req.body)

    if (result.errors) {
        return next({ status: 400, error: { message: result.errors } })
    }

    res.status(201).json({ data: result })
}

function update(req, res, next) {
    const id = req.params.id
    const result = models.update(id, req.body)

    if (result.errors) {
        return next({ status: 400, error: { message: result.errors } })
    }

    res.status(201).json({ data: result })
}

function removeOne(req, res, next) {
    const id = req.params.id
    const result = models.removeOne(id)

    if (result.errors) {
        return next({ status: 400, error: { message: result.errors } })
    }

    res.status(200).json({ data: result })
}

module.exports = { getAll, getOne, create, update, removeOne }