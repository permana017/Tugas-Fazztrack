const { default: fetch } = require("node-fetch")
import fetch from 'node-fetch';



let getUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((json)=> console.log(json))
    .catch((error)=>{
        new error("ini error")
        console.log.error
    })
}

getUser()
