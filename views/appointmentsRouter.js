
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const appointmentsController = require('../controllers/appointmentsController');

router.get('/', auth, isAdmin, appointmentsController.getAllAppointments);
router.post('/', auth, appointmentsController.createNewAppointment);
router.put('/', auth, appointmentsController.modifyAppointment);
router.delete('/', auth, isAdmin, appointmentsController.deleteAppointment);

module.exports = router;