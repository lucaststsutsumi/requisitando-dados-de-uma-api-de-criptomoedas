(function () {
    // My APi key
    var apikey = {
        key: '7776ff14-c644-4f9b-8043-7373eb5210bc'
    }



    // GET fetch requisiton
    fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apikey.key}`)
        .then((response) => {
            if (!response.ok) throw new Error(`Erro na requisição, status: ${response.status}`)
            return response.json();
        })
        .then((api) => {
            console.log(api)
            var coinTextCode = '';
            console.log('historical api', api);
            for (i = 0; i < 11; i++) {
                coinTextCode +=
                    `  
                     <div class="item">
                            <img src="resource/img/cripto-icon.png" class="item-img" alt="coin">
                            <div class="item-body">
                                <h5>${api.data[i].name}</h5>
                                <p>${api.data[i].symbol}</p>
                                <p>${api.data[i].first_historical_data}</p>
                            </div>
                        </div>
                    `
            }

            document.getElementById('coins').innerHTML = coinTextCode;
        })
        .catch((err) => console.error)

})()