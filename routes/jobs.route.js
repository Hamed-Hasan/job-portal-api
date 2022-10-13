const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobs.controller');

router.post('/jobs', jobController.createJob);
router.get('/manager/jobs', jobController.getJob);


module.exports = router;