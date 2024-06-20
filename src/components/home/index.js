import "./styles.css"
import { EstadoCard } from "./estado";
import { PrevisaoCard } from "./previsao";
import { Resposta } from "./resposta";
import { useState } from "react";
import { HomeLink } from "./link";

import { Link } from "react-router-dom";

export function Home() {
    const [dados, setDados] = useState({
        nome: '...',
        temp: '0°C',
        desc: '...'
      });
    
      const [previsao, setPrevisao] = useState([]);
    
      return (
        <div>       
          <div className='card'>
            <EstadoCard setDados={setDados} setPrevisao={setPrevisao} />
            <Resposta dados={dados} />
          </div>
          <PrevisaoCard dados={previsao} />
          <HomeLink />
        </div>
      );
}