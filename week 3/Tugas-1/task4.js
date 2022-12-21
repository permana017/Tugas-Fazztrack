


// function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {

//     let data = dataArray
    
//     if (nilaiAwal<nilaiAkhir) {
//         return data > nilaiAwal && data < nilaiAkhir
//     }
//     function dataArray(data) {
    
//     }
// }


// 


// function Input(param1,param2,dataF){
//  if(param2 > param1){
//     let data = [2, 25, 4, 14, 17, 30, 8]
//     let after_filter  = data.filter((item,i)=>{
//         return item > param1 && item < param2
//     })
//     dataF(after_filter)
//  }else{
//     console.log('salah tolol')
//  }
// }


// function Show(params) {
//    console.log(params)
// }

// Input(5, 20, Show)



function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
      if(dataArray.length > 5){
         if(nilaiAkhir > nilaiAwal){
            let data = dataArray
            let after_filter  = data.filter((item)=>{
                return item > nilaiAwal && item < nilaiAkhir
            })
           Show(after_filter)
         }
         else{
            console.log('Nilai akhir harus lebih besar dari nilai awal')
         }
      }else{
         console.log('Jumlah angka dalam dataArray harus lebih dari 5')
      }

      
   }
   
   
   function Show(params) {
      if (params.length == 0) {
         console.log("nilai tidak di temukan")
      }
      else{
         let sort = params.sort(function(a, b) {
            return a - b;
          });
          console.log(sort)
      }
   }
   
   seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
   seleksiNilai(4, 17 , [2, 25, 4])
   seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
   
