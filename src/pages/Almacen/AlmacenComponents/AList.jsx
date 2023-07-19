import React, { useContext } from "react";
import { AlmacenContext } from "./../AlmacenContext";
import { Card } from "./Card";

const AList = ({ almacen, activeFilter }) => {
  const {actualizarCantidadesRetiradas } = useContext(AlmacenContext);
  return (
    
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {almacen.map((item, index) => {
        let key;
        if (activeFilter === "herramientas" && item.idHerramienta !== undefined) {
          key = "H" + item.idHerramienta;
        } else if (activeFilter === "accesorios" && item.idAccesorio !== undefined) {
          key = "A" + item.idAccesorio;
        } else {
          key = "M" + (item.idMaterial || item.id || index); // Usar índice como clave predeterminada
        }
        return<Card
        key={key}
        item={item}
        activeFilter={activeFilter}
        actualizarCantidadesRetiradas={actualizarCantidadesRetiradas}
        almacen={almacen}
      />;
      })}
    </div>
  );
};

export { AList };