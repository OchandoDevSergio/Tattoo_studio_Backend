
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');
const isArtist = require('../middlewares/artistroleVerify');

const artistsController = require('../controllers/artistsController');


router.get('/', artistsController.getAllArtists);
router.post('/', auth, isAdmin, artistsController.createNewArtist);
router.put('/', auth, isArtist, artistsController.modifyArtist);
router.delete('/', auth, isArtist, artistsController.deleteArtist);
router.get('/:userId', auth, isArtist, artistsController.searchArtistDesigns);

module.exports = router;