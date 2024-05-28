const { sendMailer, Profile_Contact, YES_NO } = require("../Util/Mail.util");


exports.send_File = async (req, res) => {
    let EmailData = req.body;
    try {
        await sendMailer(EmailData);
        res.status(200).send(`mail sucessfully sent to ${EmailData.To}`);
    } catch (error) {
        console.log(error);
        res.send(`error whlile sending mail..`, error)
    }
};

exports.Profile_Contact = async (req, res) => {
    let EmailData = req.body;
    try {
        await Profile_Contact(EmailData);
        res.status(200).send(`message sucessfully sent to`);
    } catch (error) {
        console.log(error);
        res.send(`error whlile sending message..`, error)
    }
};

exports.YES_NO = async (req, res) => {
    let EmailData = req.body;
    console.log(EmailData);
    try {
        await YES_NO(EmailData);
        res.status(200).send(`message sucessfully sent to`);
    } catch (error) {
        console.log(error);
        res.send(`error whlile sending message..`, error)
    }
};


