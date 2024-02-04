import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import SearchPage from './pages/SearchPage';
import NavBar from './components/NavBar';
import PanelPage from './pages/PanelPage';
import FinalPage from './pages/FinalPage';
import UploadPage from './pages/UploadPage';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<SearchPage/>} />
        <Route path='/panel' element={<PanelPage/>} />
        <Route path='/final' element={<FinalPage/>} />
        <Route path='/upload' element={<UploadPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
