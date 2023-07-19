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

  const actualizarCantidadesRetiradas = (retiros) => {
  const elementosActualizados = elementosRetirar.map((elemento, index) => {
    const cantidadRetirada = retiros[index]?.cantidadRetiro || 0;
    return {
      ...elemento,
      cantidad: elemento.cantidad - cantidadRetirada,
    };
  });
  setElementosRetirar(elementosActualizados);
};

  return (
    <AlmacenContext.Provider value={{ elementosRetirar, setElementosRetirar, eliminarElementoRetirar,limpiarElementos,actualizarCantidadesRetiradas }}>
      {children}
    </AlmacenContext.Provider>
  );
};

export { AlmacenContext, AlmacenProvider };
