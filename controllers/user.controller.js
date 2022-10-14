const { createUserService } = require("../services/user.service")

exports.signUp = async (req, res, next) => {
    try {
        const sign = await createUserService(req.body)
        res.status(200).json({
            status: "success",
            massage: "successfully create a new user",
            data: sign
          })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not inserted",
            error: error.message
          })
    }
}