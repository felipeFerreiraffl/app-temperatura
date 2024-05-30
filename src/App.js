import './App.css';
import { EstadoCard } from "./components/estado/index";
import { PrevisaoCard } from './components/previsao';
import { Resposta } from "./components/resposta/index";
import { useState } from 'react';

function App() {
  const [dados, setDados] = useState({
    nome: '...',
    temp: '0°C',
    desc: '...'
  });

  const [previsao, setPrevisao] = useState([]);

  return (
    <div className="App">       
      <div className='card'>
        <EstadoCard setDados={setDados} setPrevisao={setPrevisao} />
        <Resposta dados={dados} />
      </div>
      <PrevisaoCard dados={previsao} />
    </div>
  );
}

export default App;
