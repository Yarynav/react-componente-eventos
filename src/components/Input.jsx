import { useState } from 'react';
export const Input = ({
  setNombre,
  setPassword,
  setMensaje,
  nombre,
  password,
}) => {
  return (
    <>
      <h2 className="usuario">Nombre</h2>
      <input
        value={nombre}
        className="input"
        type="text"
        placeholder="Nombre Completo"
        onChange={(e) => {
          setNombre(e.target.value);
          //cuando nostros hacemos set***** de algo no se cambia el valor automaticamnete de la variable por lo cuales si necesitamos en esta misma funcion el valor actualizado, utilizamos el valor que estamos asignando, en este caso e.targe.value
          if (e.target.value.length > 0) {
            setMensaje('');
          } else {
            setMensaje('Necesita llenar los campos');
          }
        }}
      />
      <h2 className="usuario">Contraseña</h2>
      <input
        value={password}
        className="input"
        type="password"
        placeholder="Contraseña"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </>
  );
};
