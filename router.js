

const router = require('express').Router();

const artistsRouter = require('./views/artistsRouter.js');
const appointmentsRouter = require('./views/appointmentsRouter.js');
const usersRouter = require('./views/usersRouter.js');
const authRouter = require('./views/authsRouter.js');
const paymentDatasRouter = require('./views/paymentDataRouter.js');


//Routing......

router.use('/artists', artistsRouter);
router.use('/appointments', appointmentsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/paymentdatas', paymentDatasRouter);

module.exports = router;