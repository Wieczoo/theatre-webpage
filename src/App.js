import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import MainScreen from './pages/MainScreen';
import MoviePage from './pages/MoviePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'

 function App() {

    return (
      <Router>
         <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<MainScreen/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route  path="/movie" element={<MoviePage/>} />

          <Route  path="/login" element={<LoginPage/>} />

          <Route path='/register' element={<RegisterPage/>} />
        
        </Routes>
      </Router>
    );
}

export default App; 