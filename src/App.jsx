import { useState } from 'react';
import { Title } from './components/Title';
import './style/App.scss';
import { Input } from './components/Input';
import { Boton } from './components/Boton';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <Title />

          <Input
            setPassword={setPassword}
            setNombre={setNombre}
            setMensaje={setMensaje}
            nombre={nombre}
            password={password}
          />
          {password === '252525' && (
            <Boton
              setNombre={setNombre}
              setPassword={setPassword}
              nombre={nombre}
              setMensaje={setMensaje}
            />
          )}
          <p>{mensaje}</p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
