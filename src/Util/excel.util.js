const excelJS = require("exceljs");
const path = require("path");

async function excelCreation(param) {
    const name = "testing";
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet(name);
    
    worksheet.getCell("A1").alignment = { vertical: 'middle', horizontal: 'center' };
    
    worksheet.spliceRows(1, 0, []);
    worksheet.views = [{ showGridLines: false }];
    worksheet.getCell("C2").value = "GAINN FINTECH PVT.LTD  ";
    worksheet.getCell("C3").value = "915, The Summit Business Bay,";
    worksheet.getCell("C4").value = "Behind Guru Nanak Petrol Pump,";
    worksheet.getCell("C5").value = "Andheri (East), ";
    worksheet.getCell("C6").value = "Mumbai - 400069 Tel No.: 22-61206160 ";
    worksheet.getCell("C7").value = "Email: compliance@gainn.co.in";
    worksheet.getCell("C8").value = "Compliance Officer: Rajesh Kumar";
    // Styling 
    worksheet.mergeCells("C2:F2");
    worksheet.mergeCells("C3:F3");
    worksheet.mergeCells("C4:F4");
    worksheet.mergeCells("C5:F5");
    worksheet.mergeCells("C6:F6");
    worksheet.mergeCells("C7:F7");
    worksheet.mergeCells("C8:F8");
    worksheet.mergeCells("C9:F9");
    worksheet.getCell("C1").margins = {
        insetmode: "custom",
        inset: [0.13, 0.13, 0.25, 0.25],
    };
    worksheet.getCell("C2").alignment = {
        horizontal: "center",
    };
    worksheet.getCell("C3").alignment = {
        horizontal: "center",
    };
    worksheet.getCell("C4").alignment = {
        horizontal: "center",
    };
    worksheet.getCell("C5").alignment = {
        horizontal: "center",
    };
    worksheet.getCell("C6").alignment = {
        horizontal: "center",
    };
    worksheet.getCell("C7").alignment = {
        horizontal: "center",
    };
    worksheet.getCell("C8").alignment = {
        horizontal: "center",
    };
    worksheet.getCell("C9").alignment = {
        horizontal: "center",
    };

    let buffer;
    try {
        buffer = await workbook.xlsx.writeBuffer({ suppressWarnings: false });
        return buffer; // Return the buffer directly without sending a response
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

module.exports = excelCreation;
