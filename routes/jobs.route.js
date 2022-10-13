const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobs.controller');

router.post('/jobs', jobController.createJob);


module.exports = router;