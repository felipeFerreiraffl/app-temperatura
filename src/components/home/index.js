import "./styles.css"
import { EstadoCard } from "./estado";
import { PrevisaoCard } from "./previsao";
import { Resposta } from "./resposta";
import { useState } from "react";
import { HomeLink } from "./link";


export function Home() {
    const [dados, setDados] = useState({
        nome: '...',
        temp: '0°C',
        desc: '...'
      });
    
      const [previsao, setPrevisao] = useState([]);
      const [adicional, setAdicional] = useState(null);
    
      return (
        <div>       
          <div className='card'>
            <EstadoCard setDados={setDados} setPrevisao={setPrevisao} setAdicional={setAdicional} />
            <Resposta dados={dados} />
          </div>
          { adicional && <HomeLink state={{ dados: adicional }} /> }
          <PrevisaoCard dados={previsao} />
        </div>
      );
}