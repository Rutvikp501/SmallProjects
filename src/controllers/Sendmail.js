const sendFileMailer = require("../Util/Mail.util");


exports.send_File = async (req, res) => {
    let EmailData=req.body;
    try {
        await sendFileMailer(EmailData);
       res.status(200).send(`mail sucessfully sent to ${EmailData.To}`);
    } catch (error) {
        console.log(error);
        res.send(`error whlile sending mail..`,error)
    }
};


