const { getCandidateService } = require("../services/admin.service")


exports.getCandidate = async (req, res, next) => {

    try {
        const candidate = await getCandidateService()
        res.status(200).json({
            status: 'success',
            massage: "successfully get data for all Candidate",
            data: candidate
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message: "Data is not getting",
            error : error.message
          })
    }
}