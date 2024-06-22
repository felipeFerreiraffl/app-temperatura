import "./styles.css";

export function Infos({ dados }) {
    return(
        <div>
            <label className="info-titulo">País</label>
            <output className="info-resp">{dados.sys.country}</output>

            <label className="info-titulo">Temperatura mínima</label>
            <output className="info-resp">{dados.main.temp_min}</output>

            <label className="info-titulo">Temperatura máxima</label>
            <output className="info-resp">{dados.main.temp_max}</output>

            <label className="info-titulo">Umidade</label>
            <output className="info-resp">{dados.main.humidity}</output>

            <label className="info-titulo">Longitude</label>
            <output className="info-resp">{dados.coord.lon}</output>

            <label className="info-titulo">Latidude</label>
            <output className="info-resp">{dados.coord.lat}</output>
        </div>
    )
}