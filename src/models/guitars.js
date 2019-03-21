const guitars = require('../db')
const uuid = require('uuid/v4')

function getAll() {
    return guitars
}

function getOne(id) {
    const errors = []
    const guitar = guitars.find(guitar => guitar.id === id)

    if (guitar) return guitar

    errors.push('guitar not found')
    return errors
}

function create({ make, model, electric = false}) {
    const errors = []

    if (!make || !model) {
        errors.push('make and model are required')
        return errors
    }

    const newguitar = {
        make,
        model,
        electric,
        id: uuid()
    }

    guitars.push(newguitar)
    return newguitar
}

function update(id, { make, model, electric }) {
    const errors = []

    const guitar = guitars.find(guitar => guitar.id === id)

    if (!guitar) {
        errors.push('guitar not found')
        return errors
    }

    if (!make && !model && !electric) {
        errors.push('Please update make, model, or electric status')
        return errors
    }

    if (make) guitar.make = make
    if (model) guitar.model = model
    if (electric) guitar.electric = electric

    return guitar
}


function removeOne(id) {
    const errors = []

    const guitar = guitars.find(guitar => guitar.id === id)

    if (!guitar) {
        errors.push('guitar not found')
        return errors
    }

    guitarIdx = guitars.indexOf(guitar)
    guitars.splice(guitarIdx, 1)

    return guitar
}


module.exports = { getAll, getOne, create, update, removeOne }