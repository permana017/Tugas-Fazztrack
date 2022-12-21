


const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item == day
            })
            if(cek){
                resolve(cek)
                console.log("ini hari kerja")
            }else{
                reject(new Error("hari ini bukan hari kerja"))
            }
        }, 3000)
        
    })
    .then ((response)=>{
        return response
        
    })
    .catch((error)=>{
        console.error(error.message)
    })
}


cekHariKerja('senin')


// const cekHariKerja = async (day) => {
//         try {
//            await tes();
//             function tes(){
//                 return new Promise((resolve, reject) =>{
//                     const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//                     let cek = dataDay.find((item) => {
//                         return item == day
//                     })
//                     if(cek){
//                         resolve(cek)
//                         console.log("ini hari kerja")
//                     }else{
//                         reject(new Error("hari ini bukan hari kerja"))
//                     }
                
//             })
//             }

//         } catch (error) {
//             console.error(error.message)
//         }
// }


// cekHariKerja('senin')



