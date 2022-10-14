const Candidate = require("../models/candidate");
const HiringManager = require("../models/HiringManager");

exports.getCandidateService = async () => {
    const candidate = await Candidate.find({})
    return candidate
}
