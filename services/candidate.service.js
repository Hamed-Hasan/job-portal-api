const Jobs = require('../models/jobs');
const Candidate = require('../models/candidate');


exports.getAllCandidateByService = async (req, res, next) => {
    const allCandidate = await Candidate.find({});
    return allCandidate
}

exports.getCandidateByIdService = async (id) => {
    const jobs = await Jobs.findOne({_id: id});
    return jobs;
}

exports.applyJob = async (data) => {
    const candidate = await Candidate.create(data);
    return candidate
}