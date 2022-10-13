const HiringManager = require('../models/HiringManager');

exports.HiringManager = async (data) => {
    const manager = await HiringManager.create(data)
    return manager
}