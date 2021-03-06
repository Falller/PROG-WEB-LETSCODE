const userRouters = require('./user.routes');
const vehicleRouters = require('./vehicle.routes');
const rideRouters = require('./Ride.Routes');

const express = require('express');
const router = express.Router();

router.use('/user', userRouters);
router.use('/vehicle', vehicleRouters);
router.use('/ride', rideRouters);

module.exports = router;
