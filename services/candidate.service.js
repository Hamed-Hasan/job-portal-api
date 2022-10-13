const Jobs = require('../models/jobs');
const Candidate = require('../models/candidate');



exports.applyJob = async (data) => {
    const candidate = await Candidate.create(data);
    return candidate
}