const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobs.controller');

router.post('/jobs', jobController.createJob);
router.get('/manager/jobs', jobController.getJob);
router.get('/manager/jobs/:id', jobController.getJobById);


module.exports = router;