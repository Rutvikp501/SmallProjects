const json2xls = require('json2xls');


exports.Getdata = async (req, res) => {

    try {
        res.render("Ejs/Json_Excel",);
    } catch (error) {
        console.log(error);
    }
};
exports.ConvertTOJson = async (req, res) => {

    try {
     console.log(req.body);
     const jsonData = req.body;
     const xls = json2xls(jsonData);
     res.setHeader('Content-Type', 'application/vnd.openxmlformats');
     res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');
     res.send(xls);
    } catch (error) {
        console.log(error);
    }
};