import React, { useState } from "react";
import "./styles.css"

export function Previsao({ dia, temp }) {
    // Transfomra a temperatura em n° inteiro
    const temperatura = parseFloat(temp);
    // Variável para alteração de cor
    let cor;

    if (temperatura <= 15 ) {
        cor = '#87CEEB'
    } else if (temperatura > 15 && temperatura <= 25) {
        cor = '#90EE90'
    } else if (temperatura > 25) {
        cor = '#FA8072'
    }

    return (
        <div className="previsao" style={{backgroundColor: cor}}>
            <h5 className="previsao-dia">{dia}</h5>
            <h3 className="previsao-temp">{temp}</h3>
        </div>
    )
}