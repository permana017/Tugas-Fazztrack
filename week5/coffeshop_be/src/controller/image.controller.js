const imageModel = require("../model/image.model")
const { unlink } = require('node:fs');
const { log } = require("node:console");

const imageController = {
    upload:(req, res)=> {
        const request = {
            ...req.body,
            file: req.files,
            // image: req.file.filename,
        }
        return imageModel.upload(request)
        .then((result)=> {
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    edit:(req, res)=> {
        const request = {
            ...req.body,
            id: req.params.id,
            file: req.files,
        }
        return imageModel.edit(request)
        .then((result)=> {
            console.log(result.oldImages)
            if(typeof result.oldImages != "undefined"){
                for (let index = 0; index < result.oldImages.length; index++) {
                    // console.log(result.oldImages[index].filename)
                    unlink(`public/upload/images/${result.oldImages[index].filename}`, (err) => {
                        // if (err) throw err;
                        console.log(`successfully deleted ${result.oldImages[index].filename}`);
                    });
                }
            }
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    delete:(req, res)=> {
        return imageModel.delete(req.params.id)
        .then((result)=> {
            for (let index = 0; index < result.length; index++) {
                unlink(`public/upload/images/${result[index].filename}`, (err) => {
                    if (err) throw err;
                    console.log(`successfully deleted ${result[index].filename}`);
                });
            }
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        }) 
    }, 
}

module.exports = imageController