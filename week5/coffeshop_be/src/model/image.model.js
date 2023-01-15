const db = require("../../helper/connection")
const { v4: uuidv4 } = require('uuid');


const imageModel = {
    upload:({tittle, price, image, category, file})=>{
        return new Promise((resolve, reject) => {
            if(tittle == '' || typeof tittle == "undefined" ){
              return reject ('data ada yang kosong');
            }else if(price == ''){
                return reject ('data ada yang kosong');
            }else if(category == ''){
                return reject ('data ada yang kosong');
            }else if(image == '' ){
                return reject ('data ada yang kosong');
            }
            else{
                db.query(
                    `INSERT INTO products (id, tittle, price, img, category) VALUES ('${uuidv4()}','${tittle}','${price}','${image}','${category} ') RETURNING id`,
                    (err, result) => {
                        // console.log(result);
                        if (err) {
                            return reject (err.message);
                        } else {
                            for (let index = 0; index < file.length; index++) {
                                db.query(`INSERT INTO product_images (image_id, product_id, name, filename) VALUES($1, $2 ,$3 , $4)`,[uuidv4(), result.rows[0].id, tittle,file[index].filename])
                              }
                            return resolve ({tittle, price,category, images: image});
                        }
                    }
                );
            }
        })
    },
    
    edit:({id, tittle, price, image, category, file})=>{
        return new Promise((resolve, reject) => {
            return db.query(`SELECT * FROM products WHERE id='${id}'`,(err, result)=>{
                if(err) {
                    return res.status(500).send({ message: err.message });
                }else {
                    db.query(
                      `UPDATE products SET tittle='${tittle || result.rows[0].tittle}', price='${price || result.rows[0].price}',img='${image || result.rows[0].image}', category='${category || result.rows[0].category}' WHERE id='${id}'`,
                        (err, result) => {

                          if (err) {
                            return reject(err.message);
                          } else {
                            // console.log(typeof file == "undefined");
                            if(file.length <= 0) return resolve({id, tittle, price, category})
                            db.query(`SELECT image_id, filename FROM product_images WHERE product_id='${id}'`, (errProductImages, productImages)=>{
                              if(err) return reject ({message: errProductImages})
                              console.log(productImages.rows);
                                for (let indexNew = 0; indexNew < file.length; indexNew++) {
                                  db.query(`UPDATE product_images SET filename=$1 WHERE image_id=$2`,[file[indexNew].filename, productImages.rows[indexNew].image_id], (err, result)=> {
                                    if(err) return reject({message: "image gagal dihapus"})
                                    return resolve({id, tittle, price, category, oldImages: productImages.rows, images: file})
                                  })
                                }
                            })
                          }
                        } 
                      );
                }
            })
            
        })
    },
    delete:(id)=>{
      return new Promise((resolve, reject) => {
          db.query(
              `DELETE from products WHERE id='${id}'`,
              (err, result) => {
                if (err) {
                  return reject (err.message);
                } else {
                  db.query(`DELETE FROM product_images WHERE product_id='${id}' RETURNING filename`, (err, result)=>{
                    if(err) return reject({message:'gambar gagal dihapus'})
                    return resolve(result.rows)
                  })
                }
              }
            );  
      })
  },
}


module.exports = imageModel
