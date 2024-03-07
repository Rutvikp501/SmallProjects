const createPDF  = require('../controllers/Pdf.controller');

const router = require('express').Router();
router.get('/create', createPDF.PDF_Creation)
router.get('/ejsformat', createPDF.PDF_Creation_EJS_format)
router.get('/mailpdf', createPDF.PDF_Mail)


module.exports = router;