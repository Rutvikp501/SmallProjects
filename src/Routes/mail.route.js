
const Sendmail = require('../controllers/Sendmail');

const router = require('express').Router();

router.post('/sendmail', Sendmail.send_File)
router.post('/sendmsg', Sendmail.Profile_Contact)
router.post('/yesno', Sendmail.YES_NO)




module.exports = router;