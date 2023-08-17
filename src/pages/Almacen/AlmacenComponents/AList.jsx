import React, { useContext } from "react";
import { AlmacenContext } from "./../AlmacenContext";
import { Card } from "./Card";

const AList = ({ activeFilter }) => {
  const { almacen } = useContext(AlmacenContext);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {almacen[activeFilter].map((item) => {
        const key = `${activeFilter}-${
          item.idMaterial || item.idHerramienta || item.idAccesorio
        }`;
        return <Card key={key} item={item} activeFilter={activeFilter} />;
      })}
    </div>
  );
};

export { AList };
