const Product  = require('../controllers/ExcelData_DB.controller');

const router = require('express').Router();


router.get('/',Product.GetAllProduct)
router.get('/showallProducts',Product.ShowAllProduct)
router.get('/fileupload',Product.fileupload)

router.post('/insertExcelData',Product.insertProductData)


module.exports = router;