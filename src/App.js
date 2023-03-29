import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import MainScreen from './pages/MainScreen';
import MoviePage from './pages/MoviePage';

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
        
        </Routes>
      </Router>
    );
}

export default App; 