const express = require('express');
const router = express.Router();
const hiringManagerController = require('../controllers/hiringManager.controller');

router.route('/manager')
.post(hiringManagerController.createHiringManager)

module.exports = router;