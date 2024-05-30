import React, { useState } from "react";
import "./styles.css"
import { searchWeather } from "../../scripts/buscar-dados"
import { Input } from "../input";
import { buscarDiaSemana } from "../../scripts/buscar-prev";

export function EstadoCard({ setDados, setPrevisao }) {
    const [local, setLocal] = useState('');

    const clickButton = () => {
        if (!local.trim()) {
            console.log("Insira uma cidade")
            return;
        }

        searchWeather(local, setDados);
        buscarDiaSemana(local, setPrevisao);
    }

    return(
        <div className="local">
            <Input title="Clima Tempo" value={local} 
            onChange={(event) => {
                return setLocal(event.target.value)
            }}>
            </Input>
            <button className="local-botao" onClick={clickButton}>Buscar</button>
        </div>
    )
}