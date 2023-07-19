import React, { createContext, useState } from "react";

const AlmacenContext = createContext();

const AlmacenProvider = ({ children }) => {
  const [elementosRetirar, setElementosRetirar] = useState([]);
  const [almacen, setAlmacen] = useState([]);

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

const actualizarCantidadesRetiradas = (cantidadesRetiradas) => {
    const nuevosElementos = almacen.map((elemento, index) => {
      const cantidadRetirada = cantidadesRetiradas[index] || 0;
      return {
        ...elemento,
        cantidad: elemento.cantidad - cantidadRetirada,
      };
    });
    setAlmacen(nuevosElementos);
  };

  // Resto un elemento del array de almacen
  const eliminarElementoAlmacen = (index) => {
    const nuevosElementos = [...almacen];
    nuevosElementos.splice(index, 1);
    setAlmacen(nuevosElementos);
  };

  return (
    <AlmacenContext.Provider value={{ elementosRetirar, setElementosRetirar, eliminarElementoRetirar,limpiarElementos, actualizarCantidadesRetiradas}}>
      {children}
    </AlmacenContext.Provider>
  );
};

export { AlmacenContext, AlmacenProvider };