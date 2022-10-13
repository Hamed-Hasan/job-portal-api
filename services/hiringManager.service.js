const HiringManager = require('../models/HiringManager');

exports.HiringManagerService = async (data) => {
    const manager = await HiringManager.create(data)
    return manager
}