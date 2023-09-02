
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const usersController = require('../controllers/usersController');

router.get('/', auth, isAdmin, usersController.getAllUsers);
router.post('/', usersController.createNewUser);
router.put('/', auth, usersController.modifyUser);
router.delete('/', auth, isAdmin, usersController.deleteUser);

module.exports = router;