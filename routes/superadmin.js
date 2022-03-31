const express = require('express');
const router = express.Router();

const SuperadminController = require('../controllers/SuperadminController');

router.post('/store',SuperadminController.store);
router.post('/login',SuperadminController.login);


module.exports = router;