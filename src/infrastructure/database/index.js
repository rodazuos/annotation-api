const mongoose = require("mongoose");

const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;

module.exports = () => {
    const mongoDbInstance = async () => {
        return  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);
    }

    const isConnected = async (instance) => {
        return instance.connection.readyState === mongoose.STATES.connected;
    }

    return {
        mongoDbInstance,
        isConnected
    }

}