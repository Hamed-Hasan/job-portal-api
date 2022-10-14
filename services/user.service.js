const User = require('../models/User');

exports.createUserService = async (userInfo) => {
    const signUp = await User.create(userInfo);
    return signUp
}