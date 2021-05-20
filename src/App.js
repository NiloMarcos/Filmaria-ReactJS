import React from 'react';
import './styles.css';
import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

//https://sujeitoprogramador.com/r-api/?api=filmes/

function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;