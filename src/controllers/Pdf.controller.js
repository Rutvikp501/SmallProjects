"use strict";
const PdfPrinter = require('pdfmake');
const fs = require('fs');
const path = require("path");
const ejs = require("ejs")
const { create_document, generatePDF } = require("../Util/Pdf.util");
const { sendFileMailer, sendFile } = require('../Util/Mail.util');
const { read_image } = require('../helpers/common');
const { makeapdf } = require('../helpers/pdfmake');

exports.PDF_Creation = async (req, res, next) => {
  try {
    // let __dirname = "C:"
    // let filePath = path.join(__dirname);
    // let image = fs.readFileSync(filePath,);
    // let imageBase = Buffer.from(image).toString('base64');
    // let signature = `data:image/jpeg;base64,${imageBase}`;
    let ceo_name = ""
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
        // {
        //   text:`${name}` ,
        //   marginBottom: 10,
        //   style: {
        //     fontSize: 25,
        //     bold:true, 
        //   alignment: "center",
        //   },
        // },

        // {
        //   stack: [
        //     {
        //       text: "Annexure 2(b)(ii)",
        //       style: {
        //         alignment: "right",
        //         bold: true
        //       },
        //       marginBottom: 20
        //     },  
        //   ],
        // },

        // {
        //   text: "UNDERTAKING",
        //   alignment: "center",
        //   marginBottom: 10
        // },

        {
          columns: [
            {
              stack: [

                { text: [{ text: ` Hello ${ceo_name},` }], bold: true },


              ],
              alignment: 'left'
            },

          ],
          marginTop: 25,
          marginBottom: 30
        },
        {
          text: [
            "I am a Full-stack Developer. At Gainn Fintech Pvt Ltd, I have specialized in backend development, utilizing",
            { text: `Node.js`, bold: true },
            "and",
            { text: `Express.js`, bold: true },
            ` to create and manage `,
            { text: `RESTful APIs.`, bold: true },
            `My expertise extends to database management, particularly in`,
            { text: `MongoDB,`, bold: true },
            `Furthermore, my proficiency in crafting responsive front-end pages with `,
            { text: `HTML, CSS, JavaScript, and EJS,`, bold: true },
            `and `,
            { text: `React`, bold: true },
            `underscores my commitment to user-centered design. Additionally, I've experience in tools like `,
            { text: `Gitlab/Github,  Postman.`, bold: true },
            `and`,
            { text: `Gitlab/Github,  Postman.`, bold: true },
          ],
          style: {
            fontSize: 12
          },
          marginBottom: 20
        },


        {
          columns: [
            {
              stack: [

                { text: [{ text: `Regards !` }], },
                { text: [{ text: `Rutvik Patil` }], },
                { text: [{ text: `8591575654` }], },

              ],
              alignment: 'left'
            },

          ],
          marginTop: 25,
          marginBottom: 30
        },

      ],
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



exports.PDF_Creation_EJS_format = async (req, res) => {
  try {
    let filepath = "views/Pdf/PDF_Format.ejs";
    const pdfBuffer = await generatePDF(filepath,);

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
    res.send('Error While creating  PDF', err);
  }
};


exports.sendFile = async (req, res) => {
  let EmailData = req.body;
  try {
    let filepath = "views/Pdf/PDF_Format.ejs";
    const pdfBuffer = await generatePDF(filepath);

    // Send the PDF as an attachment via email
    // let ans = await sendFileMailer("pdf", pdfBuffer, EmailData);
    let ans = await sendFile(EmailData);
    // Return a success message to the client
    return res.status(200).send(`Mail sent successfully to: ${EmailData.email}. Response: ${ans}`);

  } catch (err) {
    // Handle errors properly
    console.error('Error while creating PDF or sending email:', err);
    return res.status(500).send('Error while creating PDF or sending email.');
  }
};
exports.PDF_Mail = async (req, res) => {
  let EmailData = req.body;
  try {
    let filepath = "views/Pdf/PDF_Format.ejs";
    const pdfBuffer = await generatePDF(filepath);

    // Send the PDF as an attachment via email
    let ans = await sendFileMailer("pdf", pdfBuffer, EmailData);
    // Return a success message to the client
    return res.status(200).send(`Mail sent successfully to: ${EmailData.To}. Response: ${ans}`);

  } catch (err) {
    // Handle errors properly
    console.error('Error while creating PDF or sending email:', err);
    return res.status(500).send('Error while creating PDF or sending email.');
  }
};

exports.Formated_PDF_Mail = async (req, res, next) => {
  try {
    let doc = await create_document();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=Formated_PDF_Mail.pdf`);
    doc.pipe(res);
    doc.end();
    if (res) {
      return res.contentType('application/pdf').send(res);
    }

  }
  catch (error) {
    console.error(error);
    next(error);
  }
}

exports.Reliving = async (req, res, next) => {
  let empdetails = req.body;
  try {
    const logo = path.join(__dirname, '../assets/Logo/black-logo-transparent.png');
    const header = path.join(__dirname, '../assets/Logo/header.png');
    const gainnImage = read_image(header)

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

    if (empdetails.document_name == "Reliving") {
      let dd = {
        content: [

          { text: "From:", x: 50, y: height - 50, bold: true },
          { text: "Richard Brown\nHR Manager\nHi-Tech Software Ltd. New York", x: 50, y: height - 70 },
          { text: "Date: 03.07.18", x: 400, y: height - 50 },
          { text: "To,", x: 50, y: height - 120, bold: true },
          { text: "Mr. Jonathan Myres\n54-B, St. Augustus Street, New York", x: 50, y: height - 140 },
          { text: "Sub: Appointment Letter for Senior Software Developer", x: 50, y: height - 180, bold: true },
          { text: "Dear Mr. Jonathan Myres,", x: 50, y: height - 200 },
          { text: "We are pleased to inform you that you have been selected for the profile of “Senior Software Developer” based on the results of interviews conducted on June 11th, 2018. Listed below are the terms and conditions of the employment as agreed upon:", x: 50, y: height - 220 },
          // Add other terms and conditions here similarly...
          { text: "1. The appointment with our organization is effective from the date of joining i.e. July 1st, 2018.", x: 70, y: height - 240 },
          { text: "2. The complete description of your salary and other allowances is stated in Annexure A that is enclosed with the letter.", x: 70, y: height - 260 },
          { text: "3. Complete job description along with roles and responsibilities for your profile has been mentioned in detail in Annexure B that is enclosed with the letter.", x: 70, y: height - 280 },
          // Add other terms and conditions similarly...
          { text: "Thanking you,", x: 50, y: height - 500, bold: true },
          { text: "Yours faithfully", x: 50, y: height - 520, bold: true },
          { text: "Richard Brown", x: 50, y: height - 540, bold: true },
        ],
        pageMargins: [40, 60, 40, 200]
      };
      let pdfDoc = printer.createPdfKitDocument({
        header: function (currentPage, pageCount) {
          return {
            text: header,
            margin: [40, 20, 40, 0]
          };
        },
        footer: function (currentPage, pageCount) {
          return {
            text: footer,
            margin: [40, 0, 40, 20]
          };
        },

        ...dd
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename=generated.pdf');
      // Pipe the PDF document directly to the response
      pdfDoc.pipe(res);
      // Finalize the PDF document
      pdfDoc.end();
    }
    if (empdetails.document_name == "Joining") {

      let headerfilepath = "views/PDF/header.ejs";
      let footerfilepath = "views/PDF/footer.ejs";
      const header = fs.readFileSync(headerfilepath, "utf8");
      const footer = fs.readFileSync(footerfilepath, "utf8");
      let dd = {
        content: [
          {
            text: 'Letter of Appointment',
            alignment: "center",
            bold: true,
            decoration: 'underline',
            fontSize: 13,
            marginTop: 30,
            marginBottom: 10
          },
          {
            text: `Date: ${empdetails.mailrecivedate}`,
            alignment: "left",
           fontSize: 10,
            marginBottom: 10
          },
          {
            text: "To,",
            alignment: "left",
           fontSize: 10,
            marginBottom: 10
          },
          {
            text: `${empdetails.name} \n${empdetails.add}`,
            alignment: "left",
            fontSize: 10,
            margin: [4, 0, 300, 10] 

          },

          {
            text: `Sub: Letter of Appointment`,
            alignment: "left",
           fontSize: 11,
            bold: true,
            marginBottom: 20
          },

          {
            text: `Dear  ${empdetails.name.split(' ')[0]}`,
           fontSize: 10,
           alignment: "left",
            marginBottom: 20
          },
          {
            text: [
              "We are pleased to appoint you in our organization as ",
              {
                text: `${empdetails.position}`,
                bold: true
              },
              " effective ",
              {
                text: `${empdetails.joiningdate}`,
                bold: true
              },
            ],
            alignment: "center",
           fontSize: 11,
            marginBottom: 20,
          },
          
          {
            ol: [
              [
                {
                  text: "Remuneration:",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },
                {
                  text: `As agreed upon mutually, your salary will be as per below  slabs.`,
                 fontSize: 10,
                  marginBottom: 10
                },
                {
                  ol: [
                    {
                      text: `Your annual package is Rs.${empdetails.Asalary} . which equates to an monthly salary of Rs.${empdetails.Msalary}.`,
                      listType: "bullet",
                      marginBottom: 5
                    },
                    {
                      text: `200/- profession tax will be deducted from your salary.`,
                      listType: "bullet",
                      marginBottom: 5
                    },

                  ],
                  marginBottom: 20,
                  fontSize: 10
                }
              ],
              [
                {
                  text: "Working Hours:",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  text: `The regular working hours of the company are from 9.00 am to 6.00 pm including 1 hour
for lunch and tea break.`,
                 fontSize: 10,
                   marginBottom: 10
                },
                {
                  text: `The 2nd and 4th Saturday will be an off day for the office.`,
                 fontSize: 10,
                   marginBottom: 10
                },
                {
                  text: `However, looking at the nature of work in case of emergencies and urgent deadlines you
are expected to work for longer hours and even on holidays if needed. Working on
holiday can be compensated in form of leave after consent from your senior.`,
                 fontSize: 10,
                   marginBottom: 10
                },

              ],

              [
                {
                  text: "Leave:",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  text: `You will be entitled to leaves as per law in force and as laid down in the Standing Orders of the company. The company follows strict time schedule and late comings are discouraged, unless otherwise notified by you in advance.`,
                 fontSize: 10,
                   marginBottom: 10
                },

                {
                  table: {

                    body: [
                      [
                        
                        {
                          text:  `Leave Calculation\n `,
                          fontSize: 10
                        },
                        { text: `Total Days` ,fontSize: 10},
                        
                      ],
                      [
                        
                        {
                          text:  `Medical leave - Calculated every month 1/2 leave\n `, fontSize: 10
                        },
                        { text: `6`,fontSize: 10 },
                        
                      ],
                      [
                        
                        {
                          text:  `Casual leave - Calculated every month 1/2 leave\n `,
                          fontSize: 10
                        },
                        { text: `6` ,fontSize: 10},
                        
                      ],
                      [
                        {
                          text:  `Annual leave - Calculated every month 1.5 leaves \n `,
                          fontSize: 10
                        },
                        { text: `18` ,fontSize: 10},
                        
                      ],
                      [
                        
                        {
                          text:  `Total\n `,
                          fontSize: 10
                        },
                        { text: `30` ,fontSize: 10},
                        
                      ],

                    ],
                  },
                  style: {
                    widths: [180, 180, ],
                  },
                  marginBottom: 20
                },
              ],
              [
                {
                  text: "Probation/ Traning:",
                  style: {
                   fontSize: 11,
                    bold: true,
                    
                marginTop: 25,
                  },
                  
                },

                {
                  text: `You will be on probation / Traning for a period of Two months, that is March  2023. The period
of probation / Traning can be extended at the discretion of the Management and you will continue
to be on probation / Traning till an order of confirmation has been issued .`,
                 fontSize: 10,
                   marginBottom: 10
                },


              ],
              [
                {
                  text: "Full time employment:",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                  
                },

                {
                  text: `Your position is a whole time employment with the Company and you shall devote
yourself exclusively to the business and interests of the company. You will not take up
any other work for remuneration (part time or otherwise) or work in an advisory capacity,
or be interested directly or indirectly (except as shareholder / debenture holder), in any
other trade or business during your employment with the company, without permission in
writing of the Directors of the Company. You will also not seek membership of any local
or public bodies without first obtaining specific permission from the Management.`,
                 fontSize: 10,
                   marginBottom: 10
                },


              ],
              [
                {
                  text: "Confidentiality:",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  text: `You will not, at any time, during the employment or after, without the consent of the
Board of Directors disclose or divulge or make public, except on legal obligations, any
information regarding the Company’s affairs or administration or research carried out,
whether the same is confided to you or becomes known to you in the course of your
service or otherwise.`,
                 fontSize: 10,
                   marginBottom: 10
                },


              ],
              [
                {
                  text: "Intellectual Property:",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  text: `If you conceive any new or advanced method of improving designs/ processes/ formulae/
systems, etc. in relation to the business/ operations of the Company, such developments
will be fully communicated to the company and will be, and remain, the sole right/
property of the Company.`,
                 fontSize: 10,
                   marginBottom: 10
                },


              ],
              [
                {
                  text: "Responsibilities & Duties:",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  text: `Your work in the organization will be subject to the rules and regulations of the
organization as laid down in relation to conduct, discipline and other matters. You will
always be alive to responsibilities and duties attached to your office and conduct yourself
accordingly. You must effectively perform to ensure results.`,
                 fontSize: 10,
                   marginBottom: 10
                },


              ],
              [
                {
                  text: "Past Records",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  text: `If any declaration given, or information furnished by you, to the company proves to be
false, or if you are found to have willfully suppressed any material information, in such
cases, you will be liable to removal from services without any notice.`,
                 fontSize: 10,
                   marginBottom: 10
                },


              ],
              [
                {
                  text: "Termination of employment",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  ol: [
                    {
                      text: `During the probation period, your services may be terminated at any time without giving
any notice or payment and without assigning any reason to you.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `However, on confirmation the services can be terminated from either side by giving one
month (30 days) notice or salary in lieu thereof. During notice period any leaves availed
will be without pay.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `Upon termination of employment, you will immediately hand over to the Company all
correspondence, specifications, formulae, books, documents, market data, cost data,
drawings, affects or records belonging to the Company or relating to its business and
shall not retain or make copies of these items.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `Upon termination of employment, you will also return all company property, which may be
in your possession.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `Unauthorized absence or absence without permission from duty for a continuous period
of 7 days would make you loose your lien on employment. In such case your employment
shall automatically come to an end without any notice of termination or notice pay.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `Your salary will be paid after 45 days from the approved last date of employment or job
termination.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `After the declaration of a bonus or salary increment date, if you resign or terminate your
job within the 30-day period, you will not be entitled to any bonus or salary increment
difference.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `If your salary settlement date is coming within 45 days from your resignation date or
termination date, you will not be entitled to any bonus or salary increment difference.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `Miss used or damage of organizations and clients intellectual or physical attributes will be
lead to strict legal action.`,
                      listType: "bullet",
                       marginBottom: 10
                    },
                    {
                      text: `Spreading negative words or remarks about colleagues (employees), clients, or senior
management of the organization, including comments and remarks in any form of digital
or physical media, will result in strict legal action.`,
                      listType: "bullet",
                       marginBottom: 10
                    },

                  ],
                  marginBottom: 20,
                  fontSize: 10
                }


              ],
              [
                {
                  text: "Salary revision",
                  style: {
                   fontSize: 11,
                    bold: true
                  },
                },

                {
                  text: `Your salary will be reviewed after six probation period or April 1st of each year in case you
have joined by October of that year, or at such other time as the Management may
decide. Salary revisions are discretionary and will be subject to, and on the basis of,
effective performance and results.`,
                 fontSize: 10,
                   marginBottom: 10
                },


              ],

            ],
            style: {
              fontSize: 11
            }
          },
          {
            text: `We congratulate you on your appointment and wish you a long and successful career with us. We are confident that your contribution will take us further in our journey towards becoming world leaders. We assure you of our support for your professional development and growth.`,

            fontSize: 11,
            marginTop: 25,
            marginBottom: 15
          },
          {
            text: "Please sign and return duplicate copy of this letter in token of your acceptance.",

            fontSize: 11,
            marginTop: 15,
            marginBottom: 15
          },
          {
            text: "Yours truly,",
            alignment: "left",
           fontSize: 11,
            marginBottom: 15
          },
          {
            text: `For ${cpn_name}`,
            alignment: "left",
           fontSize: 11,
            marginBottom: 20
          },
          {
            text: "To,",
            alignment: "left",
           fontSize: 11,
            marginBottom: 20
          },
          {
            text: "AUTHORIZED SIGNATORY",
            alignment: "left",
           fontSize: 11,
            marginBottom: 20
          },

        ],
        pageMargins: [60, 60, 60, 60]
      };
      let pdfDoc = printer.createPdfKitDocument({
        header: function (currentPage, pageCount) {
          return {
            image: gainnImage,
            fit: [600, 600],
          };
        },
        footer: function (currentPage, pageCount) {
          return [
            {
              text:`${GAINNAdd}`,
              fontSize: 8,
              color: '#999999',
              alignment: "center",
              margin: [40, 0, 60, 60] // Adjust top margin if needed
            },
           

          ];
        },

        ...dd
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename=joining.pdf');
      // Pipe the PDF document directly to the response
      pdfDoc.pipe(res);
      // Finalize the PDF document
      pdfDoc.end();
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  }
}
exports.multiplepage = async (req, res, next) => {

  const empdetails = req.body
  try {
    const pdfBuffer = await makeapdf(empdetails)
    res.setHeader('Content-Disposition', 'attachment; filename=clients.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    return res.end(pdfBuffer);
  } catch (error) {

  }
}