



// VARIABLE JAVASCIRPT

// VARIABLE LET

// Let adalah variable di javascript yang dapat di uabah atau di modifikasi,
// let juga menganut scope block yang mana cakupan variabelnya hanya bisa diakses di dalam blocknya saja.
// Maka jika ada variable let yang namanya sama tapi berbeda scope data yang di olah akan memiliki nilai awal sama.

{
    
    let sayHallo = "hallo ahdi"
    sayHallo = "hallo ini variable let"
    console.log(sayHallo)
}


// VARIBALE CONST

// const adalah variable di javascript yang tidak dapat di ubah atau di modifikasi,
// const bersifat constant atau tetap, cons juga cocok di gunakan untuk variable yang mebutuhkan variable yang value nya tetap.
// const juga menganut scope block yang mana cakupan variabelnya hanya bisa diakses di dalam blocknya saja.

{
    
    const sayHallo = "hallo ini varaible const"
    console.log(sayHallo)
}


// VARIBALE VAR

// Var adalah variable di javascript yang dapat di ubah atau di modifikasi sama sepeti let,
// var menganut scope function/local yang mana cakupan variabelnya bisa diakses di luar blocknya.
// Maka jika ada variable var yang namanya sama walaupun scope nya beda maka variable tersebut bisa di akses oleh variable luar scope nya.

{
    var sayHallo = "hallo ahdi"
    // sayHallo = "hallo ini variable var"

}

console.log(sayHallo)





