const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/guitars')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.removeOne)

module.exports = router