export function aditionalInfo(cidade, getInfo) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=4d04b0dc4b016dbde26edb8ae6abd73a`;

    fetch(url)
    .then(resposta =>{
        // console.log(resposta)
        return resposta.json()
    })
    .then(dados =>{
        // Caso os dados não sejam colocados corretamente ou dê problema na rede ou API
        if (dados.cod !== 200) {
            throw new Error(dados.message);
        }

        getInfo({
            pais: dados.sys.country,
            tempMin: dados.main.temp_min + "°C",
            tempMax: dados.main.temp_max + "°C",
            umi: dados.main.humidity + " g/m³",
            long: dados.coord.lon + "°",
            lat: dados.coord.lat + "°"
        })

    })
    .catch(erro => {
        console.log(erro);
    })
    
}