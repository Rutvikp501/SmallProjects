const createPDF  = require('../controllers/Pdf.controller');

const router = require('express').Router();
router.get('/createpdf', createPDF.PDF_Creation)
router.get('/pdfformat', createPDF.PDF_Creation_EJS_format)
router.get('/mailpdfformat', createPDF.PDF_Mail)


module.exports = router;