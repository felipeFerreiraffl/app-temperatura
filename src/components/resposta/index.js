import React, { useState } from "react";
import "./styles.css"

export function Resposta({ dados }) {
    return(
        <div className="resp">
            <label className="resp-temp" htmlFor="local">Local</label>
            <output className="resp-out" id="local">{dados.nome}</output>
            <label className="resp-temp" htmlFor="temperatura">Temperatura</label>
            <output className="resp-out" id="temperatura">{dados.temp}</output>
            <label className="resp-temp" htmlFor="descricao">Descrição</label>
            <output className="resp-out" id="descricao">{dados.desc}</output>
        </div>
    )
}