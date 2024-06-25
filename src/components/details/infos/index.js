import "./styles.css";

export function Infos({ dados }) {
    return (
        <div className="info-card">
            <div>
                <div className="info-comp">
                    <label className="info-titulo">País</label>
                    <output className="info-resp">{dados.pais}</output>
                </div>

                <div className="info-comp">
                    <label className="info-titulo">Temperatura mín.</label>
                    <output className="info-resp">{dados.tempMin}</output>
                </div>

                <div className="info-comp">
                    <label className="info-titulo">Temperatura máx.</label>
                    <output className="info-resp">{dados.tempMax}</output>
                </div>
            </div>
            <div>
                <div className="info-comp">
                    <label className="info-titulo">Umidade</label>
                    <output className="info-resp">{dados.umi}</output>
                </div>

                <div className="info-comp">
                    <label className="info-titulo">Longitude</label>
                    <output className="info-resp">{dados.long}</output>
                </div>

                <div className="info-comp">
                    <label className="info-titulo">Latidude</label>
                    <output className="info-resp">{dados.lat}</output>
                </div>
            </div>
        </div>
    )
}