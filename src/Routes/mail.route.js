const Sendmail  = require('../controllers/Sendmail');

const router = require('express').Router();

router.post('/sendmail', Sendmail.send_File)




module.exports = router;