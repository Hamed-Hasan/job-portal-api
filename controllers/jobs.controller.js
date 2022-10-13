const { createJobsService } = require("../services/jobs.service")

exports.createJob = async (req, res, next) => {

    try {
        const jobs = await createJobsService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Job created successfully',
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message: "Data is not inserted",
            error : error.message
          })
    }
}
exports.getJob = async (req, res, next) => {

    try {
        const jobs = await createJobsService()
        res.status(200).json({
            status: 'success',
            message: 'Job getting successfully',
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message: "Data is not getting",
            error : error.message
          })
    }
}