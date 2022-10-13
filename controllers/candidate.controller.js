

exports.applyJob = async (req, res, next) => {

    try {
        const jobs = await createJobsService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Job applied successfully',
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message: "apply Data is not inserted",
            error : error.message
          })
    }
}

