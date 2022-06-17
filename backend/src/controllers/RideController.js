const rideService = require ('../services/RideService');

const createRide = async (req, res) => {
    const body = req.body;
    const response = await rideService.createRideService(body);
    return res.status(response.statusCode).json(response.data);
}

const getRide = async (req, res) => {
    const response = await rideService.getRideService();
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createRide, getRide
}