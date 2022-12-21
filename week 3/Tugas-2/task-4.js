


// contoh 1



// const examValue = (value) => {
//     return new Promise((resolve, reject) => {
//         if (value > 70) {
//             resolve(console.log("kamu lulus ujian"))
//         } else {
//             reject(new Error("kamu harus remedial"))
//         }
//     },)
//         .then((response) => {
//             return response

//         })
//         .catch((error) => {
//             console.log(error.message)
//         })
//     }

// examValue(90)






// const examValue = async (value) => {
//     try {
//         await tes();
//         function tes() {
//             return new Promise((resolve, reject) => {
//                 if (value > 70) {
//                     resolve(console.log("kamu lulus ujian"))
//                 } else {
//                     reject(new Error("kamu harus remedial"))
//                 }

//             })
//         }

//     } catch (error) {
//         console.log(error.message)
//     }
// }

// examValue(90)


// // contoh 2


// const inputName = (name) => {
//     return new Promise((resolve, reject) => {
//         if (name == null) {
//             reject(new Error("data nama kosong"))           
//         } else {
//             resolve(console.log(`hallo ${name} selamat siang`))
//         }
//     },)
//         .then((response) => {
//             return response

//         })
//         .catch((error) => {
//             console.log(error.message)
//         })
//     }

// inputName("ahdi permana")




// const inputName = async (name) => {
//     try {
//         await tes();
//         function tes() {
//             return new Promise((resolve, reject) => {
//                 if (name == null) {
//                     reject(new Error("data nama kosong"))           
//                 } else {
//                     resolve(console.log(`hallo ${name} selamat siang`))
//                 }

//             })
//         }

//     } catch (error) {
//         console.log(error)
//     }
// }

// inputName()