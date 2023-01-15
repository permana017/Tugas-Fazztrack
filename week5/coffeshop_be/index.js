require('dotenv').config();

const {urlencoded, json} = require('express')
const express = require('express')
const app = express()
const router = require('./src/view/index')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const db = require("./helper/connection")



app.use(urlencoded({extended: true}))
app.use('/api/v1', router)

app.use(cors());

app.use(json())


// app.get("/products", (req, res) => {
//   db.query(
//     `SELECT * from pruducts`,
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({ message: err.message });
//       } else {
//         return res.status(200).send({ message: "succes", data: result.rows });
//       }
//     }
//   );
// });

// app.post("/products", (req, res) => {
//     const {tittle, img, category, price} = req.body;
//     console.log(req.body)
//     db.query(
//         `INSERT INTO products (id, tittle, img, category, price) VALUES ('${uuidv4()}','${tittle}','${price}','${img}','${category}')`,
//         (err, result) => {
//             if (err) {
//                 return res
//                     .status(500)
//                     .send({message: err.message});
//             } else {
//                 return res
//                     .status(201)
//                     .json({message: "succes", data: req.body});
//             }
//         }
//     );
// });

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


const port = 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})