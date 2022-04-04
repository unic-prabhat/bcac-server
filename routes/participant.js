const express = require('express');
const router = express.Router();

const ParticipantController = require('../controllers/ParticipantController');

router.post('/store',ParticipantController.store);


module.exports = router;