import React, {useState} from 'react';
import './App.css';
import MensageOut from './components/MensgOut';
import MensageInput from './components/MensgInput';

const App = () => {
  const [mensaje, setmensaje] = useState(
    [
      { text: "Hola, Bienvenido a Chat 1.0", propietario: "Chat" },
    ]
  );

  const agregarMensaje = (msg) => {
    setmensaje([...mensaje, msg]);
  };

  return (
    <>
      <MensageOut mensajes={mensaje} />
      <MensageInput agregarMensaje={agregarMensaje} />
    </>
  );
};

export default App;
