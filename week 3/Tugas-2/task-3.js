let getMonth = (ShowMonth) => {
    setTimeout(() => {
        let error = false
        let month = [
            'Januari',
            'Febuari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember'
        ]
        if (!error) {
           return  ShowMonth(null, month)
        } else {
            return ShowMonth(new error("sorry Data Not Found"))
        }
    }, 4000);
}

function ShowMonth(err, data) {
    if (!err) {
        data.map(month => month);
        console.log(data)

    };
}

getMonth(ShowMonth)