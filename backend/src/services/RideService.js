const rideRepository = require('../repositories/RideRepository');

const createRideService = async (payload) => {
    const data = rideRepository.createRide(payload);
    try {
        // verificar se o payload está preenchido ou não
        if (!payload) {
            return {
            // tratar esse erro na camada 4
            statusCode: 400,
            data: 'Dados da corrida não informados!'
            }
        }
        
        if(data) {
            return {
                statusCode: 200,
                data: data
            }
        }
        
    } catch (error) {
        // erros que acontece durante a execução e a aplicação não consegue prever
        return {
            // tratar esse erro na camada 4
            statusCode: 500,
            data: error.message
        }
    }
}

const getRideService = async () => {
    try {
        const rides = await rideRepository.getRides();
        if(!rides) {
            return {
                statusCode:402,
                data: 'Nenhuma Corrida Cadastrada'
            }
        }

        return {
            statusCode: 200,
            data: rides
        }
    } catch (error) {
        // erros que acontece durante a execução e a aplicação não consegue prever
        return {
            // tratar esse erro na camada 5
            statusCode: 500,
            data: error.message
        }
    }
}

module.exports = {
    createRideService,
    getRideService
}