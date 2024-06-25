import './App.css';
import { Details } from './components/details';
import { Home } from './components/home';

import { Link } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from './components/home/context';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Details />} path='/detalhes' />
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </div>
  );
}

export default App;
