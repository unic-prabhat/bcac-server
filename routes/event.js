const express = require('express');
const router = express.Router();

const EventController = require('../controllers/EventController');


router.get('/', EventController.index);
router.get('/list/:id', EventController.listviewrowid);
router.post('/store',EventController.store);


module.exports = router;