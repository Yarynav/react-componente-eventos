import React from 'react';

export const Boton = ({ setPassword, setNombre, nombre, setMensaje }) => {
  const accion = () => {
    setPassword('');
    setNombre('');
    if (nombre.length > 0) {
      setPassword('');
      setNombre('');
    } else {
      setMensaje('Necesita llenar los campos');
    }
  };
  return (
    <button className="boton" onClick={accion}>
      Enviar
    </button>
  );
};
