var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');

/* GET travel page. */
console.log('Inside app_server, routers, travel.js');
router.get('/', controller.travel);

module.exports = router;