const createPDF  = require('../controllers/Pdf.controller');

const router = require('express').Router();
router.get('/create', createPDF.PDF_Creation)
router.get('/formated-PDF', createPDF.Formated_PDF_Mail)
router.get('/ejsformat', createPDF.PDF_Creation_EJS_format)
router.get('/mailpdf', createPDF.PDF_Mail)
router.post('/sendpdf', createPDF.sendFile)
router.post('/joining', createPDF.Reliving)
router.get('/multiplepage', createPDF.multiplepage)


module.exports = router;