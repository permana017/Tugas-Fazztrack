const {Client} = require('pg')


const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'coffe_shope',
    password: 'permana17',
    port: 5432,
  })

db.connect((err)=> {
    if(err) {
        console.log('db connection error', err)
    }else {
        console.log('Database connected - PostgreSQL');
    }
})

module.exports = db