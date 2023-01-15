const db = require("../../helper/connection")
const { v4: uuidv4 } = require('uuid');


const userModel = {
    query: (queryParams, sortType = 'asc', limit = 5, offset = 0 ) => {
        if (queryParams.name && queryParams.address) {
            return `WHERE name LIKE '%${queryParams.name}%' AND address LIKE '%${queryParams.address}%' ORDER BY name ${sortType} LIMIT ${limit} OFFSET ${offset}`;
        } else if (queryParams.name || queryParams.address) {
            return `WHERE name LIKE '%${queryParams.name}%' OR address LIKE '%${queryParams.address}%' ORDER BY name ${sortType} LIMIT ${limit} OFFSET ${offset}`;
        } else {
            return `ORDER BY name ${sortType} LIMIT ${limit} OFFSET ${offset}`;
        }

    },


    get: function (queryParams) {
        console.log(queryParams)
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * from users ${this.query(queryParams, queryParams.sortBy, queryParams.limit, queryParams.offset)}`,
                (err, result) => {
                  console.log(result.rows)
                  if (err) {
                    return reject (err.message)
                  } else {
                  return resolve (result.rows);
                  }
                }
              ); 
        })
    },
    getById:(id)=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `SELECT * from users WHERE id='${id}'`,
                (err, result) => {
                  if (err) {
                    return reject(err.message)
                  } else {
                    return resolve(result.rows[0])
                  }
                }
              );
        })
    },
    add:({name, email, address, username, role})=>{
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO users (id, email, address, name, username, role) VALUES ('${uuidv4()}','${email}','${address}','${name}','${username}', '${role}')`,
                (err, result) => {
                    if (err) {
                        return reject (err.message);
                    } else {
                        return resolve ({name, email, address, username});
                    }
                }
            );
        })
    },
    update:({id, name, email, address, username, role})=>{
            return new Promise((resolve, reject) => {
                return db.query(`SELECT * FROM users WHERE id='${id}'`,(err, result)=>{
                    if(err) {
                        return res.status(500).send({ message: err.message });
                    }else {
                        db.query(
                          `UPDATE users SET name='${name || result.rows[0].name}', email='${email || result.rows[0].email}',address='${address || result.rows[0].address}', username='${username || result.rows[0].username}' role='${role || result.rows[0].role}' WHERE id='${id}'`,
                            (err, result) => {
                              if (err) {
                                return reject(err.message);
                              } else {
                                return resolve({id, name, email, address, username, role}) ;
                              }
                            } 
                          );
                    }
                })
                
            })
    },
    remove:(tot)=>{
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE from users WHERE id='${tot}'`,
                (err, result) => {
                  if (err) {
                    return reject (err.message);
                  } else {
                    return resolve ("success delete");
                  }
                }
              );  
        })
    },
}


module.exports = userModel