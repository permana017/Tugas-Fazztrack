


const dataProfile = {
    id : 1,
    name : "Leane Graham",
    username : "breat",
    email : "sincere@april.biz",
    addres:{
        street :"kuala Light",
        suite : "Apt. 556",
        city : "Gwenbrough",
        zipcode: "92998-3874",
    },
    phone : "1-770-736-8031- x56442",
    website : "hildegard.org"
}


const updateProfile = {
    ...dataProfile,
    name : "ahdi permana",
    username : "permana",
    email : "Ahdipermana@gmail.com",
    hobi : "futsal"
}

console.log(updateProfile)

const {addres : {street, city}} = updateProfile

console.log(street)
console.log(city)