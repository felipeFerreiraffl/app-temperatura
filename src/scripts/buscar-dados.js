export function searchWeather(cidade, setInfo) {

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

        // A informação por padrão vem minúscula
        const descLowerCase = dados.weather[0].description
        // Com isso, a primeira letra da descrição vem maiúscula
        const mainDesc = descLowerCase[0].toUpperCase() + descLowerCase.slice(1);

        // Colocação de dados no parâmetro
        setInfo({
            nome: dados.name,
            temp: dados.main.temp + "ºC",
            desc: mainDesc
        })

    })
    .catch(erro => {
        console.log(erro);
    })
}