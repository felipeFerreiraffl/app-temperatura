import { Infos } from "./infos";
import { useLocation } from "react-router-dom";

export function Details() {
    const location = useLocation();
    const { dados } = location.state?.dados;

    if(!dados) {
        return (
            <div>
                Informações não disponíveis
            </div>
        )
    }

    return(
        <div>
            <Infos dados={dados} />            
        </div>
    )
}