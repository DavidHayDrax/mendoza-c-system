import React, { createContext, useState } from "react";

const AlmacenContext = createContext();

const AlmacenProvider = ({ children }) => {
  const [almacen, setAlmacen] = useState({
    materiales: [
      {
        idMaterial: "M1",
        nombreMaterial: "Cemento Azul",
        descripcionMaterial: "Cemento antisalitre",
        cantidadMaterial: "20",
        imagenMaterial: "cemento_azul.png",
        imagenURLMaterial: "https://example.com/image.jpg",
      },
      {
        idMaterial: "M2",
        nombreMaterial: "Ladrillos",
        descripcionMaterial: "ladrills king kong",
        cantidadMaterial: "130",
        imagenMaterial: "ladrillos.png",
        imagenURLMaterial: "https://example.com/image.jpg",
      },
      {
        idMaterial: "M3",
        nombreMaterial: "SikaFlex Universal",
        descripcionMaterial: "color gris, antisalitre",
        cantidadMaterial: "11",
        imagenMaterial: "sikaflex.png",
        imagenURLMaterial: "https://example.com/image.jpg",
      },
    ],
    herramientas: [
      {
        idHerramienta: "H1",
        nombreHerramienta: "Amoladora DWalt",
        descripcionHerramienta: "Inalambrica",
        cantidadHerramienta: 1,
        operativaHerramienta: true,
        imagenHerramienta: null,
        imagenURLHerramienta: "https://example.com/image.jpg",
      },
      {
        idHerramienta: "H2",
        nombreHerramienta: "Atornilladoras DWalt",
        descripcionHerramienta: "Inalambrica",
        cantidadHerramienta: 3,
        operativaHerramienta: false,
        imagenHerramienta: null,
        imagenURLHerramienta: "https://example.com/image.jpg",
      },
      {
        idHerramienta: "H3",
        nombreHerramienta: "Palanas",
        descripcionHerramienta: "Palana comun",
        cantidadHerramienta: 2,
        operativaHerramienta: true,
        imagenHerramienta: null,
        imagenURLHerramienta: "https://example.com/image.jpg",
      },
    ],
    accesorios: [
      {
        idAccesorio: "A1",
        nombreAccesorio: "Bateria DWalt",
        accesoriodeAccesorio: "Amoladora DWalt",
        descripcionAccesorio: "20 voltios",
        cantidadAccesorio: 2,
        imagenAccesorio: null,
        imagenURLAccesorio: "https://example.com/image.jpg",
      },
      {
        idAccesorio: "A2",
        nombreAccesorio: "Anillo amoladora",
        accesoriodeAccesorio: "Amoladora DWalt",
        descripcionAccesorio: "de 9 pulgadas",
        cantidadAccesorio: 1,
        imagenAccesorio: null,
        imagenURLAccesorio: "https://example.com/image.jpg",
      },
    ],
  });
  const [elementosRetirar, setElementosRetirar] = useState([]);
  

  const eliminarElementoRetirar = (index) => {
    const updatedElementosRetirar = [...elementosRetirar];
    updatedElementosRetirar.splice(index, 1);
    setElementosRetirar(updatedElementosRetirar);
  };

  const limpiarElementos = () => {
    const limpiarElementosRetirar = [...elementosRetirar];
    limpiarElementosRetirar.splice(0, limpiarElementosRetirar.length);
    setElementosRetirar(limpiarElementosRetirar);
  };

  return (
    <AlmacenContext.Provider
      value={{
        almacen,       
        setAlmacen,    
        elementosRetirar,
        setElementosRetirar,
        eliminarElementoRetirar,
        limpiarElementos,
      }}
    >
      {children}
    </AlmacenContext.Provider>
  );
};

export { AlmacenContext, AlmacenProvider };
