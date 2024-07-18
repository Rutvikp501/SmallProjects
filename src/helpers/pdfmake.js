const puppeteer = require('puppeteer');
const fs = require("fs");
const ejs = require("ejs");
const { PDFDocument } = require('pdf-lib');
exports.makeapdf = async (empdetails) => {
//console.log(req.body);
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        // Use CSS to specify where you want page breaks
        await page.addStyleTag({
            content: `
                .page-break {
                    page-break-before: always;
                }
                `,
        });
        let headerfilepath = "views/PDF/header.ejs";
        let footerfilepath = "views/PDF/footer.ejs";
        let contentfilepath = "views/PDF/joining.ejs";
        const header = fs.readFileSync(headerfilepath, "utf8");
        const footer = fs.readFileSync(footerfilepath, "utf8");
        const content = fs.readFileSync(contentfilepath, "utf8");
        const htmlContent = ejs.render(content,{empdetails});
        await page.setContent(htmlContent)
        const pdfBuffer = await page.pdf({
            format: 'A4',
            displayHeaderFooter: true,
            printBackground: true, // Include background colors and images
            headerTemplate: header,
            footerTemplate: footer,
            margin: {
                top: '100px',    // Adjust the top margin
                bottom: '80px', // Adjust the bottom margin
                left: '30px',   // Adjust the left margin
                right: '30px'   // Adjust the right margin
            },
            landscape: false
        });
        await browser.close();
        let modifiedPdf = await shiftPagesForward(pdfBuffer)
        return modifiedPdf;


    } catch (error) {
        console.error("Error generating PDF:", error);
        throw error;
    }
};
async function shiftPagesForward(pdfBuffer) {
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    // Get the number of pages
    const pageCount = pdfDoc.getPageCount();
    // Extract the last page
    const lastPage = pdfDoc.getPage(pageCount - 2);
    // Remove the last page
    pdfDoc.removePage(pageCount - 2);
    // Insert the last page at the beginning
    pdfDoc.insertPage(1, lastPage);
    // Save the modified PDF to a buffer
    const modifiedPdfBytes = await pdfDoc.save();
    return modifiedPdfBytes;
}

