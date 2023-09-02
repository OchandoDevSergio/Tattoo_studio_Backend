
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const rolesController = require('../controllers/rolesController');

router.get('/', auth, isAdmin, rolesController.getAllRoles);
router.post('/', auth, isAdmin, rolesController.createNewRole);
router.put('/', auth, isAdmin, rolesController.modifyRole);
router.delete('/', auth, isAdmin, rolesController.deleteRole);

module.exports = router;