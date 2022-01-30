import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import DigitalClock from './components/DigitalClock/DigitalClock';
import CountDown from './components/CountDown/CountDown';
import StopWatch from './components/StopWatch/StopWatch';



function App() {
  return (


    <div className="app">

      <div className="app_digitalClock">
        <DigitalClock/>
      </div>

      <div className="app_countDown">
        <CountDown/>
      </div>

      <div className="app_StopWatch">
        <StopWatch/>
      </div>
         
            
    </div>
  );
}

export default App;
