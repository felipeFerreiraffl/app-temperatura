import "./styles.css";

export function Infos({ dados }) {
    return(
        <div>
            <label className="info-titulo">País</label>
            <output className="info-resp">{dados.pais}</output>

            <label className="info-titulo">Temperatura mínima</label>
            <output className="info-resp">{dados.tempMin}</output>

            <label className="info-titulo">Temperatura máxima</label>
            <output className="info-resp">{dados.tempMax}</output>

            <label className="info-titulo">Umidade</label>
            <output className="info-resp">{dados.umi}</output>

            <label className="info-titulo">Longitude</label>
            <output className="info-resp">{dados.long}</output>

            <label className="info-titulo">Latidude</label>
            <output className="info-resp">{dados.lat}</output>
        </div>
    )
}