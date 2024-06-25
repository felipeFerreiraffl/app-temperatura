// Componente que evita a perca de dados durante a transição de páginas

import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [dados, setDados] = useState({
        nome: '...',
        temp: '0°C',
        desc: '...'
    });
    const [previsao, setPrevisao] = useState([]);
    const [adicional, setAdicional] = useState(null);

    return (
        <WeatherContext.Provider value={{ dados, setDados, previsao, setPrevisao, adicional, setAdicional }}>
            {children}
        </WeatherContext.Provider>
    );
}
