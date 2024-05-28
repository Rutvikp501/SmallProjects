const createPDF  = require('../controllers/Pdf.controller');

const router = require('express').Router();
router.get('/create', createPDF.PDF_Creation)
router.get('/formated-PDF', createPDF.Formated_PDF_Mail)
router.get('/ejsformat', createPDF.PDF_Creation_EJS_format)
router.post('/mailpdf', createPDF.PDF_Mail)
router.post('/sendpdf', createPDF.sendFile)


module.exports = router;