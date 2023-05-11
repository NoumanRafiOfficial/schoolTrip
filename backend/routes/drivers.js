const express = require('express')
const {
    getDrivers,
    getDriver,
    createDriver,
    deleteDriver,
    updateDriver
} = require('../controllers/driverController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all drivers routes
router.use(requireAuth)

// GET all drivers
router.get('/', getDrivers)

// GET a single driver
router.get('/:id', getDriver)

// POST a new driver
router.post('/', createDriver)

// DELETE a driver
router.delete('/:id', deleteDriver)

// UPDATE a driver
router.patch('/:id', updateDriver)

module.exports = router