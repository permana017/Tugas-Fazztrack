



let fruits = ["jambbu", "apel", "mangga", "pisang"]



//Method javascript


//1. push()

//Method push digunakan untuk menambah satu atau lebih data baru di ahir dari sebuah array.


fruits.push("sirsak", "nanas")

console.log(1,fruits)


//2. pop()

// Method pop adalah kebalikan dari push.
// Method pop digunakan untuk menghapus item terakhir dari sebuah array.
// Method pop tidak perlu menggunakan argumen.


fruits.pop()

console.log(2,fruits)


// 3. Unshift()

// maka method unshift digunakan untuk menambah item baru di awal sebuah array.

fruits.unshift("jeruk")

console.log(3,fruits)


// 4.shift()

//Shift adalah kebalikan dari unshift.
// Digunakan untuk menghapus item pertama dari sebuah array.

fruits.shift()

console.log(4,fruits)



// 5. Reverse()

// Reverse adalah suatu method yang membalikan index dan value

fruits.reverse()

console.log(5,fruits)


// 6. ToString()

// Tostring adalah suatu method yang mengembalikan value ke string

let ubahKeString = fruits[4].toString()

console.log(6,ubahKeString)


// 7. join()

// join adalah suatu method yang menyatukan / menggabungkan value menjadi satu kesatuan

let ubahKeJoin = fruits.join()

console.log(7,ubahKeJoin)


// 8. Concat

//Method concat digunakan untuk menggabungkan 2 atau lebih array.

let cake = ["nastar", "Bolu lapis"]

let mix =  fruits.concat(cake)

console.log(8,mix)

//9. Map()

// adalah metode nonmutasi yang menciptakan array baru,
// yang merupakan kebalikan dari metode mutasi, yang hanya
//  membuat perubahan terhadap array yang memanggil.

const numbers = [65, 44, 12, 4];
numbers.map((item,i)=>{
  console.log(item,i[3])
})

// 10. length 

// lengt adalah method yang bisa menampilakn jumlah index dari array

let jmlIndex = fruits.length

console.log(jmlIndex)




