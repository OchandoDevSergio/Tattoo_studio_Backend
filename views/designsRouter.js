
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');
const isArtist = require('../middlewares/artistroleVerify');

const designsController = require('../controllers/designsController');


router.get('/', designsController.getAllDesigns);
router.post('/', auth, isArtist, designsController.createNewDesign);
router.put('/', auth, isArtist, designsController.modifyDesign);
router.delete('/', auth, isArtist, designsController.deleteDesign);

module.exports = router;