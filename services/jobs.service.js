const Jobs = require('../models/jobs');

exports.createJobsService = async (data) => {
    const jobs = await Jobs.create(data);
    return jobs
}