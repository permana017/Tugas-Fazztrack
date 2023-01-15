const db = require("../../helper/connection")
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');


const authModel = {
    login:({username, password})=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `SELECT * from users WHERE username=$1`, [username],
                (err, result) => {
                if(err) return reject(err.message)
                if(result.rows.length == 0 ) return reject('username/password INVALID')
                bcrypt.compare(password, result.rows[0].password, 
                    function(err, hashingResult) {
                      if(err) return reject(err.message)
                      if(!hashingResult) return reject("NOT_FOUND")
                      return resolve(result.rows[0])
                  });
                }
              );
        })
    },
    register:({username, password})=>{
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO users (id, username, password) VALUES ($1, $2, $3)`,
                [uuidv4(), username, password],
                (err, result) => {
                    if (err) {
                        return reject(err.message);
                        } else {
                        return resolve("ADD_SUCCESS");
                        }
                }
            );
        })
    },
}


module.exports = authModel