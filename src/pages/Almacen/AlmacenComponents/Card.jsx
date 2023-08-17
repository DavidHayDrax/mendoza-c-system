import React from "react";
import { useContext } from "react";
import { AlmacenContext } from "./../AlmacenContext";
import { RiAddLine } from "react-icons/ri";

const Card = ({ item, activeFilter }) => {
  const { setElementosRetirar} = useContext(AlmacenContext);
  let nombre, descripcion, cantidad, operativa, accesoriode, imagen;

  if (activeFilter === "materiales") {
    nombre = item.nombreMaterial;
    descripcion = item.descripcionMaterial;
    cantidad = item.cantidadMaterial;
    imagen = item.imagenMaterial;
  } else if (activeFilter === "herramientas") {
    nombre = item.nombreHerramienta;
    descripcion = item.descripcionHerramienta;
    cantidad = item.cantidadHerramienta;
    operativa = item.operativaHerramienta;
    imagen = item.imagenHerramienta;
  } else if (activeFilter === "accesorios") {
    nombre = item.nombreAccesorio;
    descripcion = item.descripcionAccesorio;
    cantidad = item.cantidadAccesorio;
    accesoriode = item.accesoriodeAccesorio;
    imagen = item.imagenAccesorio;
  }

  const handleRetirar = () => {
    const elementoRetiro = { nombre, imagen, cantidad };
    setElementosRetirar(prevElementos => {
      return [...prevElementos, elementoRetiro];
    });
  };

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={imagen}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{nombre}</p>
      <span className="text-gray-400">{descripcion}</span>
      <p className="text-gray-600">{cantidad} Unidades Disponibles</p>
      {activeFilter === "herramientas" && (
        <div
          className={`p-1 font-bold text-gray-900 rounded-lg ${
            operativa ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {operativa ? "Operativa" : "No Operativa"}
        </div>
      )}
      {activeFilter === "accesorios" && (
        <div className="text-gray-500">Accesorio de: {accesoriode}</div>
      )}

      <div className="flex gap-2 font-bold w-full justify-center">
        <button className="bg-blue-500 text-2xl rounded-lg p-1">
          <RiAddLine />
        </button>
        <button className="bg-red-500 rounded-lg px-2" onClick={handleRetirar}>RETIRO</button>
      </div>
    </div>
  );
};

export { Card };