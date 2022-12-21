// NO.3

const mtk = 100
const bahasaIndoneasia = 85
const bahasaInggris = 80
const ipa =75


const rataRata = ((mtk+bahasaIndoneasia+bahasaInggris+ipa)/4)

console.log("Rata-rata: " + rataRata)

const grade = rataRata


if(typeof grade == "number"){
    if (grade > 100)  {
        console.log("nilai tidak valid")
    } else if (grade >= 90) {
        console.log("Kamu mendapatkan nilai A")   
    } else if (grade >= 80) {
        console.log("Kamu mendapatkan nilai B")   
    } else if (grade >= 70) {
        console.log("Kamu mendapatkan nilai C")   
    }else if (grade >= 60) {
        console.log("Kamu mendapatkan nilai D")   
    }
     else {
        console.log("Kamu mendapatkan nilai E")
    }
}else{
    console.log('data harus number')
}
