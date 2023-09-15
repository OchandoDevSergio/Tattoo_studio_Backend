

const router = require('express').Router();

const artistsRouter = require('./views/artistsRouter.js');
const appointmentsRouter = require('./views/appointmentsRouter.js');
const usersRouter = require('./views/usersRouter.js');
const authRouter = require('./views/authsRouter.js');
const paymentDatasRouter = require('./views/paymentDatasRouter.js');
const designsRouter = require('./views/designsRouter.js');


//Routing......

router.use('/artists', artistsRouter);
router.use('/appointments', appointmentsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/paymentdatas', paymentDatasRouter);
router.use('/designs', designsRouter);

module.exports = router;