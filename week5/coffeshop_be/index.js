require('dotenv').config();

const {urlencoded} = require('express')
const express = require('express')
const app = express()
const router = require('./src/view/index')
const cors = require('cors')


app.use(urlencoded({extended: true}))
app.use('/api/v1', router)

app.use(cors());


// app.get("/users", (req, res) => {
//   db.query(
//     `SELECT * from users`,
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({ message: err.message });
//       } else {
//         return res.status(200).send({ message: "succes", data: result.rows });
//       }
//     }
//   );
// });
// app.get("/users/:id", (req, res) => {
// const {id} = req.params
// db.query(
//   `SELECT * from users WHERE id='${id}'`,
//   (err, result) => {
//     if (err) {
//       return res.status(500).send({ message: err.message });
//     } else {
//       return res.status(200).send({ message: "succes", data: result.rows[0] });
//     }
//   }
// );
// });

// app.post("/users", (req, res) => {
//     const {name, email, address, username} = req.body;
//     db.query(
//         `INSERT INTO users (id, email, address, name, username) VALUEs ('${uuidv4()}','${email}','${address}','${name}','${username}')`,
//         (err, result) => {
//             if (err) {
//                 return res
//                     .status(500)
//                     .send({message: err.message});
//             } else {
//                 return res
//                     .status(201)
//                     .send({message: "succes", data: req.body});
//             }
//         }
//     );
// });
// app.put("/users", (req, res) => {
//     res
//         .status(200)
//         .send({message: "succes"})
// })
// app.patch("/users/:id", (req, res) => {
//   const {name, email, address, username} = req.body
//   const {id} = req.params
//   db.query(`SELECT * FROM users WHERE id='${id}'`,(err, result)=>{
//       if(err) {
//           return res.status(500).send({ message: err.message });
//       }else {
//           db.query(
//             `UPDATE users SET name='${name || result.rows[0].name}', email='${email || result.rows[0].email}',address='${address || result.rows[0].address}', username='${username || result.rows[0].username}' WHERE id='${id}'`,
//               (err, result) => {
//                 if (err) {
//                   return res.status(500).send({ message: err.message });
//                 } else {
//                   return res.status(201).send({ message: `success update data ${id}`, data: res.body });
//                 }
//               } 
//             );
//       }
//   })
// })
// app.delete("/users/:id", (req, res) => {
//   const {id} = req.params
//   db.query(
//     `DELETE from users WHERE id='${id}'`,
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({ message: err.message });
//       } else {
//         return res.status(201).send({ message: `success delete data ${id}`, data: {} });
//       }
//     }
//   );
// })


app.get("*", (req, res) => {
    return res.send({status: 404, message: "not found"});
});


const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})