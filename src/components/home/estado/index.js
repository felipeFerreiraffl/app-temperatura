import React, { useState } from "react";
import "./styles.css"
import { searchWeather } from "../../../scripts/buscar-dados"
import { Input } from "../input";
import { buscarDiaSemana } from "../../../scripts/buscar-prev";
import { aditionalInfo } from "../../../scripts/buscar-details";
import { useNavigate } from "react-router-dom";

export function EstadoCard({ setDados, setPrevisao, setAdicional }) {
    const [local, setLocal] = useState('');
    const navigate = useNavigate();

    const clickButton = () => {
        if (!local.trim()) {
            console.log("Insira uma cidade")
            return;
        }

        searchWeather(local, setDados);
        buscarDiaSemana(local, setPrevisao);
        aditionalInfo(local, infoAdd => {
            // Colocar os dados na página "/detalhes"
            // Ao clicar no botão, a opção de link aparece
            setAdicional(infoAdd);
        });
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