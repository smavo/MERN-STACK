// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/auth/Login';
import NuevaCuenta from './Components/auth/NuevaCuenta';
import Proyectos from './Components/proyect/Proyectos';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
       <Route exact path="/proyectos" component={Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;
