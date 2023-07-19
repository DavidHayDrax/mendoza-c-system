import React from "react";
import { useState } from "react";
import Sidebar from "../../components/shared/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FInput } from "./FInput";
import { FList } from "./FList";
import {FOptions} from './FOptions'

function Facturas() {
  const [showMenu, setShowMenu] = useState(false);
  const [distribuidores, setDistribuidores] = useState([{
    id: "1",
    distribuidor: "Sodimac",
    ruc: "20409377816"
  },
  {
    id: "2",
    distribuidor: "Promart",
    ruc: "20409335487"
  },
  {
    id: "3",
    distribuidor: "Maestro",
    ruc: "20405635481"
  }
])
  const [facturas, setFacturas] = useState([
    {
      id: 1,
      distribuidor: "Sodimac",
      ruc: 20409377123,
      nroFactura: "F015-571",
      fecha: "15/04/2021",
      descripcion: "Compra de cemento",
      precio: 1200,
    },
    {
      id: 2,
      distribuidor: "Sodimac",
      ruc: 20409377123,
      nroFactura: "F015-521",
      fecha: "10/04/2021",
      descripcion: "Compra de ladrillo",
      precio: 1600,
    },
    {
      id: 3,
      distribuidor: "Promart",
      ruc: 20409377816,
      nroFactura: "F015-5621",
      fecha: "14/04/2021",
      descripcion: "Compra de tanque de agua",
      precio: 1800,
    },
  ]);

  const addDistribuidor = (distribuidor, ruc) => {
    const lastId = distribuidores.length > 0 ? distribuidores[distribuidores.length - 1].id : 1;
    const newDistribuidor = {
      id: lastId + 1,
      distribuidor,
      ruc
    };
    const distribuidoresList = [...distribuidores];
    distribuidoresList.push(newDistribuidor);
    setDistribuidores(distribuidoresList);
  }

  const deleteDistribuidor = (
    id
  ) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar este Distribuidor?.");
    if(opcion == true){
      var contador = 0;
      const distribuidoresList = [...distribuidores];
      distribuidoresList.map((distribuidorE)=>{
        if(id == distribuidorE.id){
          distribuidoresList.splice(contador, 1);
        }
        contador++;
      });
      setDistribuidores(distribuidoresList);
    }
  };

  const addFactura = (
    distribuidor,
    ruc,
    nroFactura,
    fecha,
    descripcion,
    precio
  ) => {
    const lastId = facturas.length > 0 ? facturas[facturas.length - 1].id : 1;

    const newFactura = {
      id: lastId + 1,
      distribuidor,
      ruc,
      nroFactura,
      fecha,
      descripcion,
      precio,
    };
    const facturaList = [...facturas];
    facturaList.push(newFactura);
    setFacturas(facturaList);
  };

  const editFactura = (
    id,
    distribuidor,
    ruc,
    nroFactura,
    fecha,
    descripcion,
    precio
  ) => {
    const facturaList = [...facturas];
    const index = facturaList.findIndex((factura) => factura.id === id);

    if (index !== -1) {
      facturaList[index] = {
        id,
        distribuidor,
        ruc,
        nroFactura,
        fecha,
        descripcion,
        precio,
      };
      setFacturas(facturaList);
    }
  };

  const deleteFactura = (
    id
  ) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+id);
    if(opcion == true){
      var contador = 0;
      const facturaList = [...facturas];
      facturaList.map((facturaE)=>{
        if(id == facturaE.id){
          facturaList.splice(contador, 1);
        }
        contador++;
      });
      setFacturas(facturaList);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col bg-[#262837] min-h-screen">
      <Sidebar showMenu={showMenu} />
      <main className="lg:pl-32 w-full flex">
        <div className="pt-4 flex flex-grow">
          <FInput addFactura={addFactura} distribuidores={distribuidores} />
        </div>
        <div className="bg-[#1F1D2B] pl-5"></div>
        <FOptions addDistribuidor={addDistribuidor} distribuidores={distribuidores} deleteDistribuidor={deleteDistribuidor}/>
      </main>
      <div className="bg-[#1F1D2B]">.</div>
      <FList facturas={facturas} editFactura={editFactura} deleteFactura={deleteFactura} />
    </div>
  );
}

export default Facturas;
