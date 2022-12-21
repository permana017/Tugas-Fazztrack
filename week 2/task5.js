// NO.5

// function convertAtoO(vocal) {
//     let data = vocal.replaceAll("a", "o")
//     data = data.replaceAll("A", "O")
    
//     console.log(data)
// }

// convertAtoO("jakartA")



let text = "jakartA"
let arr = []


function replaceText(vocal) {

    for(let i of vocal) {
        if (i == "a") {
            arr.push("o");
        }else if(i == "A") {
            arr.push("O");
        }
        else {
            arr.push(i)
        }
    }
    return arr.join("")

}

console.log(replaceText(text))