const {Client} = require('pg')
require('dotenv').config()


const {DB_USERNAME, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT} = process.env

const db = new Client({
    user: DB_USERNAME,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
})

//   const db = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'coffe_shope',
//     password: 'permana17',
//     port: 5432,
//   })

db.connect((err)=> {
    if(err) {
        console.log('db connection error', err)
    }else {
        console.log('Database connected - PostgreSQL');
    }
})

module.exports = db