
const Productmodel = require("../models/Product.model");
const payoutbackups = require("../models/payoutbackups");
const XLSX = require('xlsx');

const multer = require('multer');
const upload = multer().single('file');

exports.GetAllProduct = async (req, res) => {

    try {
        const Product = await Productmodel.find();
        if (Product.length > 0) {
            res.status(200).send(Product)
        } else {
            res.status(200).send("Dont have Products To Show...")
        }
    } catch (error) {
        console.log(error);
    }
};
exports.ShowAllExcelData = async (req, res) => {

    try {
        const Product = await Productmodel.find();
        if (Product.length > 0) {
            Product.sort((a, b) => {
                // Convert both Product names to lowercase for case-insensitive comparison
                const productA = a.Product.toLowerCase();
                const productB = b.Product.toLowerCase();
                
                
                if (productA < productB) {
                    return -1; //
                } else if (productA > productB) {
                    return 1; 
                } else {
                    return 0; 
                }
            });
            res.render("EJS/AllExcelData", { data: Product });
        } else {
            res.status(200).send("Dont have Products To Show...")
        }
    } catch (error) {
        console.log(error);
    }
};
exports.fileupload = async (req, res, next) => {
    try {
        const data = await Productmodel.find();
        res.render("Ejs/Excel_fileupload", { data: data });
        // res.render("fileupload");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.insertProductData1 = async (req, res, next) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Internal Server Error');
        }
        const Data = req;
        try {
            const workbook = XLSX.read(req.file.buffer);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const tabularData = XLSX.utils.sheet_to_json(sheet);
            const ProductgroupedData = {};
            let currentCompetitionProduct = '';
            let currentProduct = '';
            
            
            tabularData.forEach(entry => {
                if (entry['Product']) {
                    currentProduct = entry['Product'];
                } else {
                    entry['Product'] = currentProduct;
                }
            
                if (entry['competition Product']) {
                    currentCompetitionProduct = entry['competition Product'];
                } else {
                    entry['competition Product'] = currentCompetitionProduct;
                }
            
                const competitionProduct = entry['competition Product'];
                const product = entry['Product'];
                if (!ProductgroupedData[product]) {
                    ProductgroupedData[product] = {};
                }
                if (!ProductgroupedData[product][competitionProduct]) {
                    ProductgroupedData[product][competitionProduct] = [];
                }
                ProductgroupedData[product][competitionProduct].push({ 'Product': product, 'competition Product': competitionProduct, SKU: entry['SKU '], DPL: entry.DPL });
            });
            
            const result = Object.values(ProductgroupedData).map(product => Object.values(product));
            result.forEach(productGroups => {
                productGroups.forEach(competitionGroups => {
                    competitionGroups.forEach(async entry => {
                         //console.log(entry['Product'], entry['competition Product'], entry.SKU, entry.DPL);
                         //const ProductData = await Productmodel.insertMany(result);
                         //console.log(ProductData);
                         const Product = new Productmodel({
                            Product: entry['Product'],
                            Competition_Product: entry['competition Product'],
                            SKU: entry.SKU,
                            DPL: entry.DPL,
                        })
                        //await Product.save();
                       console.log(Product);
                    });
                });
            });
            res.send(`${result} competition products processed`); // Sending the number of processed competition products
        } catch (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        }

    });
};


exports.insertProductDatamain = async (req, res, next) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Internal Server Error');
        }
        const Data = req;
        try {
            const workbook = XLSX.read(req.file.buffer);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const tabularData = XLSX.utils.sheet_to_json(sheet);
            const ProductgroupedData = {};
            let currentCompetitionProduct = '';
            let currentProduct = '';
            
            // Function to check if a document already exists in the database
            const isDuplicateEntry = async (product, competitionProduct) => {
                const existingEntry = await Productmodel.findOne({ Product: product, Competition_Product: competitionProduct });
                return !!existingEntry; // Returns true if a matching document is found
            };
            
            for (const entry of tabularData) {
                if (entry['Product']) {
                    currentProduct = entry['Product'];
                } else {
                    entry['Product'] = currentProduct;
                }
            
                if (entry['competition Product']) {
                    currentCompetitionProduct = entry['competition Product'];
                } else {
                    entry['competition Product'] = currentCompetitionProduct;
                }
            
                const competitionProduct = entry['competition Product'];
                const product = entry['Product'];
                if (!ProductgroupedData[product]) {
                    ProductgroupedData[product] = {};
                }
                if (!ProductgroupedData[product][competitionProduct]) {
                    ProductgroupedData[product][competitionProduct] = [];
                }
                const isDuplicate = await isDuplicateEntry(product, competitionProduct);
                if (!isDuplicate) {
                    ProductgroupedData[product][competitionProduct].push({ 'Product': product, 'competition Product': competitionProduct, SKU: entry['SKU '], DPL: entry.DPL });
                }
            }
            
            const result = Object.values(ProductgroupedData).map(product => Object.values(product));
            for (const productGroups of result) {
                for (const competitionGroups of productGroups) {
                    for (const entry of competitionGroups) {
                        const Product = new Productmodel({
                            Product: entry['Product'],
                            Competition_Product: entry['competition Product'],
                            SKU: entry.SKU,
                            DPL: entry.DPL,
                        });
                        await Product.save();
                    }
                }
            }

            let dataFound = false; // Flag to track if any data is found

            for (let i = 0; i < result.length; i++) {
                const subArray = result[i];
                for (let j = 0; j < subArray.length; j++) {
                    const innerArray = subArray[j];
                    for (let k = 0; k < innerArray.length; k++) {
                        const deepestArray = innerArray[k];
                        if (deepestArray.length > 0) {
                            dataFound = true;
                            res.status(200).send( {status: true, statusCode: 200,result:result});
                        }
                    }
                }
            }
            
            if (!dataFound) {
                res.status(200).send( {status: true, statusCode: 200,result:"Data already present in the database"});
            }
            
        } catch (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        }

    });
};
exports.insertProductData = async (req, res, next) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Internal Server Error');
        }
        const Data = req;
        try {
            const workbook = XLSX.read(req.file.buffer);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const tabularData = XLSX.utils.sheet_to_json(sheet);
console.log(tabularData);
            
            // Function to check if a document already exists in the database
            const isDuplicateEntry = async (clientcode, competitionProduct) => {
                const existingEntry = await payoutbackups.findOne({ clientcode: clientcode, Competition_Product: competitionProduct });
                return !!existingEntry; // Returns true if a matching document is found
            };
            
            for (const entry of tabularData) {
                const Product = new Productmodel({
                    clientcode: entry['Code'],
                    clientname: entry['Particulars'],
                    amount: entry.Paid,
                    createdAt: entry.Date,
                });
                console.log(Product);
                //await Product.save();
            }
            

   

                

            
            res.status(200).send( {status: true, statusCode: 200,result:result});

            
        } catch (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        }

    });
};

