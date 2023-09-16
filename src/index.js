import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo2.png.png';
import {Canvas} from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
     <img src={logo} alt='alt here'/> 
    </header>
    <Canvas>
    <App />
    </Canvas>
  </React.StrictMode>
);


