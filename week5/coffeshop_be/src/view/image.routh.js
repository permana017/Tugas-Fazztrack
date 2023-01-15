const express = require("express");
const imageRoute = express();
const formUpload = require ("../../helper/multer")


const imageController = require("../controller/image.controller")

imageRoute.post('/upload',formUpload.array("image"), imageController.upload)
imageRoute.patch('/upload/:id',formUpload.array("image"), imageController.edit)
imageRoute.delete('/upload/:id', imageController.delete)





module.exports = imageRoute