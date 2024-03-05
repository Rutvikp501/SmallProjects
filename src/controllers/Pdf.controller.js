"use strict";
const PdfPrinter = require('pdfmake');
const fs = require('fs');
const path = require("path");
const generatePDF = require("../Util/Pdf.util");

exports.PDF_Creation = async(req, res, next) => {
    try {
        // let __dirname = "C:/uploads/Kshama_Sign.jpg"
        // let filePath = path.join(__dirname);
        // let image = fs.readFileSync(filePath,);
        // let imageBase = Buffer.from(image).toString('base64');
        // let signature = `data:image/jpeg;base64,${imageBase}`;
        // let client_name = "Kshama Mahakal"
        let fonts = {
            Roboto: {
                normal: 'node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf',
                bold: 'node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf',
                italics: 'node_modules/roboto-font/fonts/Roboto/roboto-italic-webfont.ttf',
                bolditalics: 'node_modules/roboto-font/fonts/Roboto/roboto-bolditalic-webfont.ttf'
            }
        };

        let printer = new PdfPrinter(fonts);
        let dd = {
            content: [
                {
                    text: "PDF Creation ",
                    style: 'header',
                    alignment: 'center',
                    color: 'red',
                    margin: [0, 0, 0, 380]
                },
                {
                    text: 'Annexure 2 (c)',
                    alignment: 'right'
                },
                {
                    text: 'Agreement between Member and Authorised Person',
                    style: 'subheader',
                    alignment: 'center',
                    decoration: 'underline',
                },

                {
                    text: 'This agreement ("Agreement") is made and executed at Mumbai this 5 day of April, 2023',
                    margin: [0, 20]
                },
                {
                    text: 'Between:',
                    style: 'subheader',
                    bold: true,
                },
                {
                    text: `Gainn Fintech Private Limited a body corporate, registered / incorporated under the provisions of Companies Act, 1956, having its Registered office at 915, Omkar the Summit Business Bay, Andheri Kurla Road, Adjacent to MovieMax, Andheri (East), Mumbai (MH) 400069., (hereinafter referred to as "Member" which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include his / her heirs, legal legal representatives, the partners for the time being of the said firm, the survivor or survivors of them and the heirs, executors and administrators of such last survivor / its successors and assigns, as the case may be ) of the One Part; `,
                    margin: [0, 20]
                },
                {
                    text: 'And',
                    alignment: 'center',
                },
                {
                    text:`**KSHAMA SATISH MAHAKAL** an individual / a limited liability partnership / a body corporate registered / incorporated under the Partnership Act, 1932 /Limited Liability Partnership Act, 2008 / Companies Act, 1956 having it's registered office at B-17, Heena Park, Near Kala Talao, Beturkar Pada, kalyan West, Kalyan, Thane, Kalyan D.c., Maharashtra, 421301 (hereinafter called "AP" which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include his / her heirs, legal representatives, executors and administrators / the partners for the time being of the said firm, the survivor or survivors of them and the heirs, executors and administrators of such last survivor / its successors and assigns, as the case may be) of the Other Part;`,
                    margin: [0, 20]
                },
                {
                    text: `Member and AP shall hereinafter be also jointly referred to as the "Parties" and severally as the "Party"`,
                    margin: [0, 20]
                },
                {
                    text: 'WHEREAS:',
                    style: 'subheader',
                    bold: true,
                },


            ]
        };

        let pdfDoc = printer.createPdfKitDocument(dd);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=generated.pdf');
        // Pipe the PDF document directly to the response
        pdfDoc.pipe(res);
        // Finalize the PDF document
        pdfDoc.end();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating PDF');
    }
};



exports.PDF_Creation_format = async (req, res) => {
    try {
        //console.log(data);
        
           
            // if (param.fileType == "pdf") {
                let filepath = "views/Pdf/PDF_Format.ejs";
                const pdfBuffer = await generatePDF(filepath, );
                // if (req.body.rtype == "mail") {
                //     let ans = await sendFileMailer("pdf", pdfBuffer, "All Segment P&L", clientDetails);
                //     return res.send(  'mail sent sucessfully' );
                // }
                res.setHeader('Content-Disposition', 'attachment; filename=My_resume.pdf');
                res.setHeader('Content-Type', 'application/pdf');
                res.end(pdfBuffer);
            // }else {
            // let excelBuffer = await excelCreation("All Segment P&L", clientDetails, data, param);
            // if (req.body.rtype == "mail") {
                // let ans = await sendFileMailer("xlsx", excelBuffer, "LT_ST Report", clientDetails);
                // return res.send({
                //     ...Constants.status200(),
                //     ...Constants.success(),
                //     ...Constants.info(),
                //     ...Constants.data(ans),
                // });
            // }
            // res.setHeader('Content-Disposition', 'attachment; filename=file.xlsx');
            // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            // return res.end(excelBuffer);
           
       
        
    } catch (err) {
        res.send('Error While creating  PDF' , err );
    }
};

exports.PDF_Mail = async (req, res) => {
    try {
        //console.log(data);
        
           
            // if (param.fileType == "pdf") {
                let filepath = "views/Pdf/PDF_Format.ejs";
                const pdfBuffer = await generatePDF(filepath, );
                    let ans = await sendFileMailer("pdf", pdfBuffer, "All Segment P&L", clientDetails);
                    return res.send(  'mail sent sucessfully',ans );
                
                res.setHeader('Content-Disposition', 'attachment; filename=My_resume.pdf');
                res.setHeader('Content-Type', 'application/pdf');
                res.end(pdfBuffer);
            
           
       
        
    } catch (err) {
        res.send('Error While creating  PDF' , err );
    }
};

