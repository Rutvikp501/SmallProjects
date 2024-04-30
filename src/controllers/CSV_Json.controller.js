const fs = require('fs');
const csv = require('csv-parser');
const multer = require('multer');
const path = require('path')
const upload = multer({ dest: 'uploads/' });
const cron = require("node-cron");

const directory = 'uploads';

function deleteFiles() {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.unlink(filePath, err => {
                if (err) {
                    console.error('Error deleting file:', filePath, err);
                    return;
                }
                console.log('Deleted file:', filePath);
            });
        });
    });
}

cron.schedule("0 0 * * *", async () => {
    deleteFiles();
});

exports.fileupload = async (req, res, next) => {
    try {
        res.render("Ejs/Csv_json",);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.CSV_Json = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const results = [];
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                res.json(results);
               // console.log(results);
            });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

// module.exports = deleteFiles;