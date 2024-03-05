const createPDF  = require('../controllers/Pdf.controller');

const router = require('express').Router();
router.post('/createpdf', createPDF.PDF_Creation)
router.post('/pdfformat', createPDF.PDF_Creation_format)