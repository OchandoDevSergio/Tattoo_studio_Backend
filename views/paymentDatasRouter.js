
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const paymentDatasController = require('../controllers/paymentDatasController');

router.get('/', auth, isAdmin, paymentDatasController.getAllPaymentDatas);
router.get('/:customerId', auth, paymentDatasController.searchAPaymentData);
router.post('/', auth, paymentDatasController.createNewPaymentData);
router.put('/', auth, paymentDatasController.modifyPaymentData);
router.delete('/', auth, paymentDatasController.deletePaymentData);

module.exports = router;