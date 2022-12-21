// NO.2

const biodata = {
    name: "Ahdi permana",
    umur: 21,
    hobby: ["Futsal", "music", "healing"],
    isMarried: false,
    schooolList: [
        {
            name: 'SMKN 1 SUMEDANG',
            major: "Desain PemodelaN dan Informasi Bagunan",
            yearIn: 2017,
            yearOut: 2020
        },
        {
            name: 'SMPN 2 BUAHDUA',
            yearIn: 2014,
            yearOut: 2017
        }
    ],
    skills: [
        {
            skillName: "HTML",
            level: "beginner"
        }, 
        {
            skillName: "CSS",
            level:"beginner"

        },
        {
            skillName: "Java Script",
            level:"beginner"

        }
    ]
}
// console.log(biodata.name)
// console.log(biodata.umur)
// console.log(biodata.isMarried)
console.table(biodata.schooolList)
console.table(biodata.hobby)
console.table(biodata.skills)