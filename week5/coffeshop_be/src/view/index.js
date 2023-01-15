

const express = require('express')
const router = express()
const userRoute = require('./users.route')
const productRoute = require ("./product.rout")
const authRoute = require ("./auth.route")
const imageRoute = require ("./image.routh")
const formUpload = require ("../../helper/multer")

// const productRoute = require ("./product.route")


router.get("/", (req, res)=>{
    return res.send("add data success")
})

router.use('/users', userRoute)
router.use('/products', productRoute)
router.use('/auth', authRoute)
router.use('/image', imageRoute)

module.exports = router