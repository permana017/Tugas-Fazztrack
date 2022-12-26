
// const getData= (ep) => {
//     return new Promise((resolve, reject)=> {
//         fetch(`https://61a704fc8395690017be9460.mockapi.io/${ep}`)
//         .then(res => {
//             if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));
    
//             return res.json();
//         })
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     })

// } 


    
const fetcher = async(method, ep, body={})=> {
    if(method == "GET") {
        const result = await getData(ep)
        return result
    }else if(method =="POST"){
        postData(ep, body)
    }else {
        deleteData(ep)
    }

}
const getData= (ep) => {
    return new Promise((resolve, reject)=> {
        fetch(`https://63a91b9b100b7737b98a2191.mockapi.io/api/product`)
        .then(res => {
            if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));
    
            return res.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    })

} 

const postData= (ep, body) => {
    let Input = (params)=> {
    return document.getElementById(params)
    }
    Input('inputNameRegist').onchange = (text)=> {
    body.name = Input('inputNameRegist').value
    console.log(body)
    }
    Input('contentRegist').onchange = (text)=> {
    body.content = Input('contentRegist').value
    console.log(body)
    }
    fetch(`https://63a91b9b100b7737b98a2191.mockapi.io/api/${ep}`,{
        method: 'POST',
        body: body
    })
        .then(res => {
            if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
}

const deleteData =(id) =>{
    if(confirm('apakah kamu yakin?')) {
        fetch(`https://63a91b9b100b7737b98a2191.mockapi.io/api/product${id}`,{
            method: 'delete',
        })
        .then(res => {
            if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

            return res.json();
        })
        .then(data => {
            window.location.reload()
        })
        .catch(err => console.error(err));
    }else {
        alert('oke batal')
    }
}

