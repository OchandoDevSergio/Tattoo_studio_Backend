
const router = require('express').Router();

const isAdminController = require('../controllers/isAdminController');

router.post('/login', isAdminController.login);


module.exports = router;