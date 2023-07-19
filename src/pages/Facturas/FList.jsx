import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const FList = ({ facturas, editFactura, deleteFactura }) => {
  const [selectedFacturaId, setSelectedFacturaId] = useState(null);
  const [distribuidor, setDistribuidor] = useState("");
  const [ruc, setRuc] = useState("");
  const [nrofactura, setNrofactura] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleFactura = () => {
    editFactura(
      selectedFacturaId,
      distribuidor,
      ruc,
      nrofactura,
      fecha,
      descripcion,
      precio
    );
    setSelectedFacturaId(null);
    setDistribuidor("");
    setRuc("");
    setNrofactura("");
    setFecha("");
    setDescripcion("");
    setPrecio("");
    setModalOpen(false);
  };

  const openModal = (id) => {
    const factura = facturas.find((factura) => factura.id === id);
    setSelectedFacturaId(id);
    setDistribuidor(factura.distribuidor);
    setRuc(factura.ruc);
    setNrofactura(factura.nroFactura);
    setFecha(factura.fecha);
    setDescripcion(factura.descripcion);
    setPrecio(factura.precio);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFacturaId(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-[#262837] w-full pl-32 pt-4">
      <div className="flex text-4xl font-semibold text-blue-500 justify-between pb-3">
        LISTADO
      </div>
      <div className="border-t p-3">
        <table className="text-white bg-gray-800 text-sm border w-full">
          <thead>
            <tr className="text-center">
              <th className="px-4 py-2">DISTRIBUIDOR</th>
              <th className="px-4 py-2">RUC</th>
              <th className="px-4 py-2">NROFACTURA</th>
              <th className="px-4 py-2">FECHA</th>
              <th className="px-10 py-2">DESCRIPCIÓN</th>
              <th className="px-2 py-2">PRECIO</th>
              <th className="px-4 py-2">OPCIONES</th>
            </tr>
          </thead>

          <tbody>
            {facturas.map((facturaD) => (
              <tr key={facturaD.id}>
                <td className="px-4 py-2">{facturaD.distribuidor}</td>
                <td className="px-4 py-2">{facturaD.ruc}</td>
                <td className="px-4 py-2">{facturaD.nroFactura}</td>
                <td className="px-4 py-2">{facturaD.fecha}</td>
                <td className="px-20 py-2">{facturaD.descripcion}</td>
                <td className="px-2 py-2">{facturaD.precio}</td>
                <td className="text-center px-4 py-2">
                  <Button
                    className="bg-blue-500 text-white px-2 py-2 mr-2 rounded-lg"
                    onClick={() => openModal(facturaD.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    className="bg-red-500 text-white px-2 py-2 rounded-lg"
                    onClick={() => deleteFactura(facturaD.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={modalOpen} toggle={closeModal}>
        <div className="bg-[#1F1D2B] p-4 text-white ">
          <ModalHeader toggle={closeModal} className="p-4 text-2xl ">
            EDITAR FACTURA
          </ModalHeader>
          <ModalBody className="grid grid-cols-2 gap-5">
            <div className="mb-4">
              <label htmlFor="distribuidor" className="block font-bold mb-1">
                DISTRIBUIDOR :
              </label>
              <input
                type="text"
                value={distribuidor}
                onChange={(e) => setDistribuidor(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ruc" className="block font-bold mb-1">
                RUC :
              </label>
              <input
                type="text"
                value={ruc}
                onChange={(e) => setRuc(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nrofactura" className="block font-bold mb-1">
                NRO FACTURA :
              </label>
              <input
                type="text"
                value={nrofactura}
                onChange={(e) => setNrofactura(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fecha" className="block font-bold mb-1">
                FECHA :
              </label>
              <input
                type="text"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="descripcion" className="block font-bold mb-1">
                DESCRIPCIÓN : 
              </label>
              <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="precio" className="block font-bold mb-1">
                PRECIO :
              </label>
              <input
                type="text"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
          </ModalBody>
          <div className="flex justify-end">
            <button className="px-4 py-2 rounded bg-blue-500 font-semibold" onClick={handleFactura}>
              Guardar cambios
            </button>
            <button className="px-4 py-2 ml-2 rounded bg-red-700 font-semibold" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { FList };
