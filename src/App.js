
//https://www.youtube.com/watch?v=dzOrUmK4Qyw&t=143s

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import './components/navbar/NavBar.js';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
      <NavBar/>
      <Search/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
