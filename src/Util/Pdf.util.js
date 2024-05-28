
const puppeteer = require("puppeteer");
const PdfPrinter = require('pdfmake');
const ejs = require("ejs")
const fs = require("fs");
const { read_image } = require("../helpers/common");
async function generatePDF(filepath, report_name, ) {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        const templateContent = fs.readFileSync(filepath, 'utf-8');
        const htmlContent = ejs.render(templateContent, { report_name: report_name, });
        await page.setContent(htmlContent)
        const pdfBuffer = await page.pdf({
            format: "A3", margin: { top: '10px', bottom: '40px' },
            displayHeaderFooter: true,
            footerTemplate: `
            <div style="width:100%;display:flex;justify-content:right">
            <p style="margin:0px 20px 0px 0px;font-size: 10px;">Page 
            <span class="pageNumber"></span>
                OF
            <span class="totalPages"></span>
            </p>
         </div>`});
        await browser.close();
        return pdfBuffer;
    }
    catch (e) {
        console.log(e)
    }
}

exports.create_document = async () => {
  
  try {
    const today = new Date();
    const CurrentDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${today.getDate()} day of ${monthNames[today.getMonth()]}, ${today.getFullYear()}`;
    const logo = path.join(__dirname, '../assets/Logo/black-logo-transparent.png');
    const gainnImage = read_image(logo)

    const cpn_name = "Gainn Fintech Private Limited";
    const GAINNAdd = `915, Omkar the Summit Business Bay,Behind Gurunanak Petrol Pump,Andheri Kurla Road, Andher (E),Mumbai - 400 069`
    const fonts = {
      Roboto: {
        normal: 'node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf',
        bold: 'node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf',
        italics: 'node_modules/roboto-font/fonts/Roboto/roboto-italic-webfont.ttf',
        bolditalics: 'node_modules/roboto-font/fonts/Roboto/roboto-bolditalic-webfont.ttf'
      }
    };

    const printer = new PdfPrinter(fonts);



    if (segment_type == "BSE") {

        if (document_name == "Reliving") {


            let dd = {
              content: [
    
                {
                  columns: [
                    {
                      stack: [
                        {
                          image: gainnImage,
                          fit: [100, 100],
                        },
                      ],
                      alignment: 'left'
                    },
                    {
    
                      text: `${cpn_name}
                          ${GAINNAdd}`,
                      style: {
                        bold: true,
                      }
                    },
                  ],
                  marginTop: 25,
                  marginBottom: 10
                },
                {
                  text: [
                    {
                      text: `Ref: ______________________`,
                      alignment: "left",
    
                    },
                    {
                      text: `Date: _______________`,
                      alignment: "right",
                    },
    
                  ], bold: true,
                  marginBottom: 10
                },
                // {
                //   text: `Ref: ______________________`,
                //   alignment: "left",
                //   bold: true,
                //   marginBottom: 0
                // },
                // {
                //   text: `Date: _______________`,
                //   alignment: "right",
                //   bold: true,
                //   marginBottom: 0
                // },
    
                {
                  text: [
                    "Undertaking to be submitted in case of ",
                    {
                      text: `Sub broker Cancellation `,
                      decoration: 'lineThrough',
                      bold: true
                    },
                    "and Authorised Person Appointment",
                  ],
                  alignment: "center",
                  bold: true,
                  marginTop: 25,
                  marginBottom: 10
                },
                {
                  text: "To",
                  alignment: "left",
                  marginBottom: 0
                },
                {
                  text: `Membership Department
              National Stock Exchange of India Ltd
              Exchange Plaza, BKC
              Mumbai
              `,
                  alignment: "left",
                  marginBottom: 10,
                  bold: true
    
                },
                {
                  text: "Dear Sir/Madam",
                  alignment: "left",
                  marginBottom: 0
                },
                {
                  text: "We hereby confirm that:",
                  alignment: "left",
                  marginBottom: 0
                },
    
                {
                  ol: [
    
                    {
                      text: `	We will not pursue any activity under sub broker registration from the date of receipt of Authorized Person Approval and application for cancellation of sub-broker has already been submitted to the Exchange along with application for appointment of Authorized Person.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	No complaint/ arbitration/disciplinary proceeding/investigation/inquiry is pending against the sub-broker with the exchange. There is no liability in any form against any of our clients by the sub broker.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	In case future liability if any arises, the same would be settled by us.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	As on date of application, the sub-broker has paid fees as per Schedule III (II) of the Regulations, along with interest, if any till the date on which the exchange has de-recognized the sub broker. `,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	In case of non-compliance of aforesaid provisions, I/ we shall be liable for all actions as deemed by the Exchange/ SEBI.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                  ]
                },
    
                {
                  text: "Thanking you,",
                  alignment: "left",
                  bold: true,
                  marginTop: 25,
                },
                {
                  text: "Yours faithfully",
                  alignment: "left",
                  bold: true,
                  marginTop: 25,
                },
                {
                  text: ` ${cpn_name}`,
                  alignment: "left",
                  bold: true,
                  marginBottom: 10
                },
    
                {
                  text: "Director / Authorised Signatory",
                  alignment: "left",
                  marginTop: 25,
                },
                {
                  text: [`Date: `, { text: `${CurrentDate}`, bold: true }],
                  alignment: "left",
                },
              ],
              pageMargins: [40, 60, 40, 200]
            };
            let pdfDoc = printer.createPdfKitDocument({
              footer: function (currentPage, pageCount) {
                return [
                  {
                    columns: [
                      {
                        text: [` Member: `, { text: " NSE | BSE | MCX | CDSL | BSE-MF", bold: true, fontSize: 10 }],
                        alignment: 'left'
                      },
                      { text: "(CIN: U72900MH2021PTC366439)", style: { bold: true, fontSize: 10, } },
                    ],
                    fontSize: 12,
                    margin: [40, 90, 0, 0],
                  },
                  {
                    text: [
                      { text: "Registered Office: ", bold: true, fontSize: 10 },
                      `${GAINNAdd}`,
                    ],
                    fontSize: 12,
                    margin: [40, 0, 0, 0] // Adjust top margin if needed
                    // fontSize: 10
                  },
                  {
                    text: [
                      { text: " Contact No:", bold: true },
                      `  7977362527 / 8291444400, `,
                      { text: "Email Id:", bold: true },
                      `compliance@gainn.co.in, `,
                      { text: " URL:", bold: true },
                      ` www.mygainn.com `
                    ],
                    fontSize: 12,
                    margin: [40, 0, 0, 0],
                    alignment: 'left'
                  },
                  { text: `Page ${currentPage.toString()} of ${pageCount.toString()}`, alignment: 'center', margin: [0, 0, 30, 10], color: '#999999' } // Page numbers added here
    
                ];
              },
              ...dd
            });
    
            return pdfDoc;
          }
          if (document_name == "Joining") {


            let dd = {
              content: [
    
                {
                  columns: [
                    {
                      stack: [
                        {
                          image: gainnImage,
                          fit: [100, 100],
                        },
                      ],
                      alignment: 'left'
                    },
                    {
    
                      text: `${cpn_name}
                          ${GAINNAdd}`,
                      style: {
                        bold: true,
                      }
                    },
                  ],
                  marginTop: 25,
                  marginBottom: 10
                },
                {
                  text: [
                    {
                      text: `Ref: ______________________`,
                      alignment: "left",
    
                    },
                    {
                      text: `Date: _______________`,
                      alignment: "right",
                    },
    
                  ], bold: true,
                  marginBottom: 10
                },
                // {
                //   text: `Ref: ______________________`,
                //   alignment: "left",
                //   bold: true,
                //   marginBottom: 0
                // },
                // {
                //   text: `Date: _______________`,
                //   alignment: "right",
                //   bold: true,
                //   marginBottom: 0
                // },
    
                {
                  text: [
                    "Undertaking to be submitted in case of ",
                    {
                      text: `Sub broker Cancellation `,
                      decoration: 'lineThrough',
                      bold: true
                    },
                    "and Authorised Person Appointment",
                  ],
                  alignment: "center",
                  bold: true,
                  marginTop: 25,
                  marginBottom: 10
                },
                {
                  text: "To",
                  alignment: "left",
                  marginBottom: 0
                },
                {
                  text: `Membership Department
              National Stock Exchange of India Ltd
              Exchange Plaza, BKC
              Mumbai
              `,
                  alignment: "left",
                  marginBottom: 10,
                  bold: true
    
                },
                {
                  text: "Dear Sir/Madam",
                  alignment: "left",
                  marginBottom: 0
                },
                {
                  text: "We hereby confirm that:",
                  alignment: "left",
                  marginBottom: 0
                },
    
                {
                  ol: [
    
                    {
                      text: `	We will not pursue any activity under sub broker registration from the date of receipt of Authorized Person Approval and application for cancellation of sub-broker has already been submitted to the Exchange along with application for appointment of Authorized Person.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	No complaint/ arbitration/disciplinary proceeding/investigation/inquiry is pending against the sub-broker with the exchange. There is no liability in any form against any of our clients by the sub broker.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	In case future liability if any arises, the same would be settled by us.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	As on date of application, the sub-broker has paid fees as per Schedule III (II) of the Regulations, along with interest, if any till the date on which the exchange has de-recognized the sub broker. `,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                    {
                      text: `	In case of non-compliance of aforesaid provisions, I/ we shall be liable for all actions as deemed by the Exchange/ SEBI.`,
                      marginBottom: 14,
                      listType: "bullet",
                    },
                  ]
                },
    
                {
                  text: "Thanking you,",
                  alignment: "left",
                  bold: true,
                  marginTop: 25,
                },
                {
                  text: "Yours faithfully",
                  alignment: "left",
                  bold: true,
                  marginTop: 25,
                },
                {
                  text: ` ${cpn_name}`,
                  alignment: "left",
                  bold: true,
                  marginBottom: 10
                },
    
                {
                  text: "Director / Authorised Signatory",
                  alignment: "left",
                  marginTop: 25,
                },
                {
                  text: [`Date: `, { text: `${CurrentDate}`, bold: true }],
                  alignment: "left",
                },
              ],
              pageMargins: [40, 60, 40, 200]
            };
            let pdfDoc = printer.createPdfKitDocument({
              footer: function (currentPage, pageCount) {
                return [
                  {
                    columns: [
                      {
                        text: [` Member: `, { text: " NSE | BSE | MCX | CDSL | BSE-MF", bold: true, fontSize: 10 }],
                        alignment: 'left'
                      },
                      { text: "(CIN: U72900MH2021PTC366439)", style: { bold: true, fontSize: 10, } },
                    ],
                    fontSize: 12,
                    margin: [40, 90, 0, 0],
                  },
                  {
                    text: [
                      { text: "Registered Office: ", bold: true, fontSize: 10 },
                      `${GAINNAdd}`,
                    ],
                    fontSize: 12,
                    margin: [40, 0, 0, 0] // Adjust top margin if needed
                    // fontSize: 10
                  },
                  {
                    text: [
                      { text: " Contact No:", bold: true },
                      `  7977362527 / 8291444400, `,
                      { text: "Email Id:", bold: true },
                      `compliance@gainn.co.in, `,
                      { text: " URL:", bold: true },
                      ` www.mygainn.com `
                    ],
                    fontSize: 12,
                    margin: [40, 0, 0, 0],
                    alignment: 'left'
                  },
                  { text: `Page ${currentPage.toString()} of ${pageCount.toString()}`, alignment: 'center', margin: [0, 0, 30, 10], color: '#999999' } // Page numbers added here
    
                ];
              },
              ...dd
            });
    
            return pdfDoc;
          }
    }


  } catch (error) {
    console.error(error);
    throw new Error('Error generating PDF');
  }
}

module.exports = generatePDF;