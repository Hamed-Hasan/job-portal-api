const Jobs = require('../models/jobs');

exports.createJobsService = async (data) => {
    const jobs = await Jobs.create(data);
    return jobs
}
exports.getJobsService = async () => {
    const jobs = await Jobs.find({});
    return jobs
}
exports.getJobsServiceById = async (jobId) => {
    const jobs = await Jobs.findOne({_id: jobId});
    return jobs
}