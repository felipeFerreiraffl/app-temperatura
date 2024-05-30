export function buscarDiaSemana(local, setInfo) {
    // URL com informações dos dias seguintes
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${local}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`;

    fetch(url)
    .then(resposta =>{
        // console.log(resposta)
        return resposta.json()
    })
    .then(dados =>{
        // Caso os dados não sejam colocados corretamente ou dê problema na rede ou API
        if (dados.cod !== 200) {
            console.log(dados.message);
        }

        // Filtrar os dados para aparecer apenas um horário de temperatura
        const previsao = dados.list.filter(item => item.dt_txt.includes("15:00:00"));

        // Limitação para os próximos 5 dias
        const proximosDias = previsao.slice(0, 5);

        const info = proximosDias.map(item => ({
            dia: item.dt_txt.split(" ")[0], // Extração da data
            temp: item.main.temp + '°C'
        }));

        console.log(dados);
        setInfo(info);

    })
    .catch(erro => {
        console.log(erro);
    })
}