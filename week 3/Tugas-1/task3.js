




let data = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope"
]



function searchName(text,jml,callback) {
    let item_filter = 0;
    let data_filter =[];

    if(text.length >= 1){
        data.map((item,i)=>{
            if(item.toLowerCase().includes(text.toLowerCase())){
                if(item_filter <= jml-1){
                    data_filter.push(item)
                    item_filter++;
                }
            }
        })
        callback(data_filter);
    }

    
}

function callback(params) {
    console.log(params.sort())
}


searchName('aN', 3, callback)
