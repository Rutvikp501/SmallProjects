const Product  = require('../controllers/ExcelData_DB.controller');

const router = require('express').Router();


router.get('/',Product.GetAllProduct)
router.get('/showallExcelData',Product.ShowAllExcelData)
router.get('/fileupload',Product.fileupload)

router.post('/insertExcelData',Product.insertProductData)
//router.post('/payout',Product.Payout)


module.exports = router;