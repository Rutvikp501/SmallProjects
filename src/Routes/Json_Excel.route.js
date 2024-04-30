const Json_Excel  = require('../controllers/Json_Excel.controller');

const router = require('express').Router();
router.get('/', Json_Excel.Getdata)
router.post('/convertToJson', Json_Excel.ConvertTOJson)


module.exports = router;