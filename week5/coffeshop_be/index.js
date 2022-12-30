const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.json([
    {
     "name": "ahdi ",
     "email": "permana@gmail.com",
     "address": "bandung",
     "username": "permana2435",
     "id": "7"
    },
    {
     "name": "Gilbert_Gleason",
     "email": "Braulio_Skiles96@example.org",
     "address": "Brandoshire",
     "username": "Zaria.Simonis",
     "id": "8"
    },
    {
     "name": "Fernando_Borer72",
     "email": "Eliezer.Volkman@example.org",
     "address": "Lake Quinten",
     "username": "Fabiola_Schmeler52",
     "id": "9"
    },
    {
     "name": "Johnnie.Little",
     "email": "Tevin82@example.com",
     "address": "Waltham",
     "username": "Eldridge_Doyle6",
     "id": "10"
    },
    {
     "name": "Abigale17",
     "email": "Amanda.Emard60@example.net",
     "address": "Brandon",
     "username": "Santina_Schneider94",
     "id": "11"
    }
   ])
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})