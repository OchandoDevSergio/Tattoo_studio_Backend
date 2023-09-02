
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const artistsController = require('../controllers/artistsController');


router.get('/', artistsController.getAllArtists);
router.post('/', auth, isAdmin, artistsController.createNewArtist);
router.put('/', auth, isAdmin, artistsController.modifyArtist);
router.delete('/', auth, isAdmin, artistsController.deleteArtist);

module.exports = router;