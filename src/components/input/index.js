import React from "react";
import "./styles.css";

// Parâmetros para o input
// title = nome que ficará em cima do card
// value = o valor do input
// onChange = uso do useState para atualização do valor
export function Input({title, value, onChange}) {
    return (
        <div>
            <label className="local-titulo" htmlFor="nome-local">{title}</label>
            <input 
                className="local-input" 
                id="nome-local" 
                type="text" 
                placeholder="Digite uma cidade ou estado"
                value={value}
                onChange={onChange} 
            />
        </div>
    )
}