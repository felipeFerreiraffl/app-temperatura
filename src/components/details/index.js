import { Infos } from "./infos";
import { DetailsLink } from "./link";
import { useLocation } from "react-router-dom";
import { WeatherContext } from "../home/context";
import "./styles.css"
import { useContext } from "react";

export function Details() {
    const { adicional } = useContext(WeatherContext);
    // Coloca os dados
    const location = useLocation();
    // Verifica se os dados estão disponíveis
    const { dados } = location.state?.dados;

    if(!dados) {
        return (
            <div>
                Informações não disponíveis
            </div>
        )
    } else {
        return(
            <div className="info-container">
                <h1>Informações detalhadas</h1>
                <Infos dados={dados} />
                <DetailsLink />            
            </div>
        )
    }
}