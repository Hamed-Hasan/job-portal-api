const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobs.controller');

router.post('/jobs', jobController.createJob);
router.get('/manager/jobs', jobController.getJob);
router.get('/manager/jobs/:id', jobController.getJobById);
router.patch('/jobs/:id', jobController.updateJob)


module.exports = router;