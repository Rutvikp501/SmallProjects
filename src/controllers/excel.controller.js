"use strict";
const PdfPrinter = require('pdfmake');
const fs = require('fs');
const path = require("path");
const generatePDF = require("../Util/Pdf.util");
const { sendFileMailer } = require('../Util/Mail.util');

exports.PDF_Creation_format = async (req, res) => {

    try {
        let filepath = "views/Pdf/PDF_Format.ejs";
        let excelBuffer = await excelCreation(filepath);

        // Send the PDF as an attachment via email
        let ans = await sendFileMailer("xlsx", excelBuffer, EmailData);
        // Return a success message to the client
        return res.status(200).send(`Mail sent successfully to: ${EmailData.To}. Response: ${ans}`);

    } catch (err) {
        // Handle errors properly
        console.error('Error while creating PDF or sending email:', err);
        return res.status(500).send('Error while creating PDF or sending email.');
    }

};
