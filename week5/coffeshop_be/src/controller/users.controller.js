const userModel = require("../model/users.model")


const userController = {
    get:(req, res)=> {
        return userModel.get(req.query)
        .then((result)=> {
            return res.status(200).send({ message: "success", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    getById:(req,res)=> {
        const {id} = req.params
        return userModel.getById(id)
        .then((result)=> {
            return res.status(201).send({ message: "success", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error})
        })
    },
    add:(req, res)=> {
        return userModel.add(req.body)
        .then((result)=> {
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    update:(req, res)=> {
        const request = {
            ...req.body,
            id: req.params.id,
        }
        return userModel.update(request)
        .then((result)=> {
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    remove:(req, res)=> {
        return userModel.remove(request)
        .then((result)=> {
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        }) 
    }, 
}

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

module.exports = userController