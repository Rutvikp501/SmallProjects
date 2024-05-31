const test  = require('../controllers/test');

const router = require('express').Router();
router.get('/oldtonew', test.old_to_new)
router.get('/ifarme', test.Iframe)
// router.post('/short', shortUrl.create_url)
module.exports = router;