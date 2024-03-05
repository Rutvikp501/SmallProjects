const nodemailer = require('nodemailer')
require('dotenv').config();
const path = require('path')
const assetsPath = path.join(__dirname, '..', 'assets');

const pdfPath = path.join(assetsPath, 'RUTVIK-PATIL-CV-.pdf');
const imagePath = path.join(assetsPath, 'image.jpg');

async function sendFileMailer(EmailData) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.RUTVIK,
            pass: process.env.RAPP_PASS
            // user: process.env.USERS,
            // pass: process.env.APP_PASS
        },
        tls: { rejectUnauthorized: false },
        
        debug: true
    });
    
    const mailOptions = {
        from: {
            name:'Rutvik Patil',
            address:process.env.USERS
        },
        to: EmailData.To,
        subject: EmailData.subject,
        text:EmailData.text,
        //html: '<b>Testing Send mail</b>',
        attachments: [
            {
                filename:'RUTVIK-PATIL-CV-.pdf',
                path:pdfPath,
                contentType:"application/pdf"
            },
            // {
            //     filename:'image.jpg',
            //     path:imagePath,
            //     contentType:"image/jpg"
            // },
        ]
    
    };
    
    // console.log(mailOptions);
    const info = await transporter.sendMail(mailOptions);
    // console.log(info)
    return info;
    };

    async function Profile_Contact(EmailData) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.RUTVIK,
                pass: process.env.RAPP_PASS
                // user: process.env.USERS,
                // pass: process.env.APP_PASS
            },
            tls: { rejectUnauthorized: false },
            
            debug: true
        });
        
        const mailOptions = {
            from: {
                name:'Rutvik Patil',
                address:process.env.USERS
            },
            to: EmailData.To,
            subject: EmailData.subject,
            text:EmailData.text,
            html:EmailData.html ,
        
        
        };
        
        // console.log(mailOptions);
        const info = await transporter.sendMail(mailOptions);
        // console.log(info)
        return info;
        };
    module.exports = {sendFileMailer,Profile_Contact};