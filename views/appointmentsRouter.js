
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const appointmentsController = require('../controllers/appointmentsController');

router.get('/', auth, isAdmin, appointmentsController.getAllAppointments);
router.get('/:userId', auth, appointmentsController.getCustomerAppointments);
router.get('/artist/:artistId', auth, appointmentsController.getArtistAppointments);
router.post('/', auth, appointmentsController.createNewAppointment);
router.put('/', auth, appointmentsController.modifyAppointment);
router.delete('/:erase', auth, appointmentsController.deleteAppointment);

module.exports = router;