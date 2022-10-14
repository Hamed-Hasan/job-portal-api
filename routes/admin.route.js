const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get('/candidate', adminController.getCandidate)
router.get('/admin/manager/', adminController.getManager)
router.get('/candidate/:id', adminController.getCandidateId)

module.exports = router;