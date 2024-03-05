const createPDF  = require('../controllers/Pdf.controller');

const router = require('express').Router();
router.get('/createpdf', createPDF.PDF_Creation)
router.get('/pdfformat', createPDF.PDF_Creation_format)


module.exports = router;