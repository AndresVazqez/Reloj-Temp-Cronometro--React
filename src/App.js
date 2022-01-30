import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './components/Pages/HomePage/HomePage';
import Header from './components/Heaader/Header';
import CountDownPage from './components/Pages/CountDownPage/CountDownPage';
import StopWatchPage from './components/Pages/StopWatchPage/StopWatchPage';
import Footer from './components/Footer/Footer';



function App() {
  return (

    <BrowserRouter>
        <Header>
            <Header/>
        </Header>
        <Routes>
            <Route path='/'>
              <Route index element={<HomePage/>}/>
              <Route path="countdown" element={<CountDownPage/>}/>
              <Route path="stopwatch" element={<StopWatchPage/>}/>
              <Route path="*" element={<h1>There is nothing here...</h1>}/>              
            </Route>
        </Routes>
        <Footer>
          <Footer/>          
        </Footer>     
    </BrowserRouter>
  );
}

export default App;
