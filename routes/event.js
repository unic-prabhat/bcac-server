const express = require('express');
const router = express.Router();

const EventController = require('../controllers/EventController');

router.post('/store',EventController.store);


module.exports = router;