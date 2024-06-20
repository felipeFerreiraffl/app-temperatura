import React, { useState } from "react";
import "./styles.css"
import { Previsao } from "../previsao-info";

export function PrevisaoCard({ dados }) {

    return (
        <div className="previsao-card">
            <div className="previsao-card-titulo">
                <h2>Próximos 5 dias</h2>
                <p>▼</p>
            </div>
            <div className="previsao-card-cards">
            {
                dados.map((item, index) => {
                    return (
                        <Previsao key={index} dia={item.dia} temp={item.temp}></Previsao>
                    )
                })
            }
            </div>
        </div>
    )
}