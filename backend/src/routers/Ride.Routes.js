const express = require('express');
const router = express.Router();

const rideController = require('../controllers/RideController');

router.post('', rideController.createRide);
router.get('', rideController.getRide);

module.exports = router;