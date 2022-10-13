

exports.createHiringManager = async (req, res, next) => {

    try {
        const jobs = await (req.body)
        res.status(200).json({
            status: 'success',
            message: 'manager created successfully',
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message: "manager is not inserted",
            error : error.message
          })
    }
}
