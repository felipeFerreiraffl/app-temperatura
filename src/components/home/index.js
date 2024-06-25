import "./styles.css"
import { EstadoCard } from "./estado";
import { PrevisaoCard } from "./previsao";
import { Resposta } from "./resposta";
import { useContext, useState } from "react";
import { HomeLink } from "./link";
import { WeatherContext } from "./context";


export function Home() {
    const { dados, setDados, previsao, setPrevisao, adicional, setAdicional } = useContext(WeatherContext);
    
      return (
        <div>       
          <div className='card'>
            <EstadoCard setDados={setDados} setPrevisao={setPrevisao} setAdicional={setAdicional} />
            <Resposta dados={dados} />
          </div>
          {/* O link aparece depois de clicar no botão "buscar" */}
          { adicional && <HomeLink state={{ dados: adicional }} /> }
          <PrevisaoCard dados={previsao} />
        </div>
      );
}