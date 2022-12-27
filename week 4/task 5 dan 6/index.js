


// TASK N0.5


let display = true


function toggleMenu() {
    let menu = document.getElementById('display-1')
        if (menu.style.display === "none") {
            menu.style.display = "block";
          } else {
            console.log('clos active')
            menu.style.display = "none";
            document.getElementById("display-2").style.display = "flex"

          }
        }
    

 function hideMenuMobile() {
    let x = document.getElementById('display-2');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      document.getElementById('display-1').style.display = "flex"
    }
  }







// TASK NO.6

getUser = async () => {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let dataJason = await data.json()
        let dataArr = []

        dataJason.map((item) => {
            let dataUser = ''
            dataUser = `
                <div class="card-name" id="${item.id}">
                    <p>ID : ${item.id}</p>
                    <p>Name : ${item.name}</p>
                    <p>Username : ${item.username}</p>
                    <p>E-mail : ${item.email}</p>
                    <p>Address : ${item.address.city}</p>
                </div>
            `
                dataArr.push(dataUser)

        })
        document.getElementById("text").innerHTML = dataArr.join('')
    } catch (error) {
        console.log(error.message)
    }
}
getUser()