

const express = require('express')
const router = express()
const userRoute = require('./users.route')

// const productRoute = require ("./product.route")


router.get("/", (req, res)=>{
    return res.send("add data success")
})

router.use('/users', userRoute)

// router.use('/product', productRoute)

module.exports = router