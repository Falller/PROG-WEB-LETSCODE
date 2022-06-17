const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');

const createRide = async (ride) => {
    const response = await Ride.create(ride);
    return response;
}

const getRides = async () => {
    const response = await Ride.find({});
    return response;
}

module.exports = {
    getRides,
    createRide
}