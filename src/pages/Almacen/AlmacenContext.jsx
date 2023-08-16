import React, { createContext, useState } from "react";

const AlmacenContext = createContext();

const AlmacenProvider = ({ children }) => {
  const [elementosRetirar, setElementosRetirar] = useState([]);

  const eliminarElementoRetirar = (index) => {
    const updatedElementosRetirar = [...elementosRetirar];
    updatedElementosRetirar.splice(index, 1);
    setElementosRetirar(updatedElementosRetirar);
  };

  const limpiarElementos = () => {
    const limpiarElementosRetirar = [...elementosRetirar];
    limpiarElementosRetirar.splice(0,limpiarElementosRetirar.length)
    setElementosRetirar(limpiarElementosRetirar);	
  }

  return (
    <AlmacenContext.Provider value={{ elementosRetirar, setElementosRetirar, eliminarElementoRetirar,limpiarElementos}}>
      {children}
    </AlmacenContext.Provider>
  );
};

export { AlmacenContext, AlmacenProvider };