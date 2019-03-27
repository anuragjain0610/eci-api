const express = require('express')
const multer = require('multer')
const path = require('path')
const route = express.Router()
const fs = require('fs')
const app = express()

const filePath = path.join(__dirname, "../public/uploadPage")
route.use('/', express.static(filePath))

const upload = multer({
    dest: path.join(__dirname, "/../temp")
})


route.post("/",
    upload.single("file"),
    (req, res) => {


        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, "../temp/image.png");

        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
            fs.rename(tempPath, targetPath, err => {
                if (err) console.log(err)
                    
            });
            // after success
            var spawn = require("child_process").spawn; 
            var process = spawn('python',[__dirname + "/../scripts/script.py"] );
        process.stdout.on('data', function(data) { 
            console.log(data.toString())
        })
    
            res.redirect('/uploaded')

        } else {
            fs.unlink(tempPath, err => {
                if (err) return handleError(err, res);

                res
                    .status(403)
                    .contentType("text/plain")
                    .end("Only .png files are allowed!");
            });
        }

    }
);


exports = module.exports = route
