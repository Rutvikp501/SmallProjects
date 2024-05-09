const router = require('express').Router();
const CSV_Json   = require('../controllers/CSV_Json.controller');
 const multer = require('multer');
// const directory = 'uploads';
const upload = multer({ storage: multer.memoryStorage() });
router.get('/fileupload',CSV_Json.fileupload)
router.post('/upload',upload.single('csvfile'),CSV_Json.CSV_Json)


module.exports = router;