const { applyJob, getCandidateByIdService } = require("../services/candidate.service")


exports.getJobById = async (req, res, next) => {
    const {id} = req.params;
    try {
        const jobs = await getCandidateByIdService(id);
        if(!jobs) {
            return res.status(400).json({
                stauts: "fail",
                error: "Could not finds a Job with this id"
              })
        }

        res.status(200).json({
            status: 'success',
            message: 'Job getting successfully',
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message: " Data is not getting",
            error : error.message
          })
    }
}
exports.applyJob = async (req, res, next) => {
    const {id} = req.params;
    try {
        const jobs = await getCandidateByIdService(id);
        // if(jobs.lastApplicationDate < new Date()) {
        //     res.status(400).json({
        //         status:"fail",
        //         error: "Can’t apply after deadline",
        //     })
        // }
        const candidate = await applyJob(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Job applied successfully',
            data: candidate
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message: "apply Data is not inserted",
            error : error.message
          })
    }
}

