import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import SearchPage from './pages/SearchPage';
import NavBar from './components/NavBar';
import PanelPage from './pages/PanelPage';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<SearchPage/>} />
        <Route path='/panel' element={<PanelPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
