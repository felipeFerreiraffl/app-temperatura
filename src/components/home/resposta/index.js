import "./styles.css";

export function Resposta({ dados }) {
    return(
        <div className="resp">
            <label className="resp-temp">Local</label>
            <output className="resp-out">{dados.nome}</output>
            <label className="resp-temp">Temperatura</label>
            <output className="resp-out">{dados.temp}</output>
            <label className="resp-temp">Descrição</label>
            <output className="resp-out">{dados.desc}</output>
        </div>
    )
}