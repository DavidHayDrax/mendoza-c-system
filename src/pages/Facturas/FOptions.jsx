import React, { useState } from "react";
import { RiListOrdered } from "react-icons/ri";
import { Button, Modal, ModalHeader, ModalBody} from "reactstrap";

const FOptions = ({ addDistribuidor, distribuidores, deleteDistribuidor }) => {
  //  INICIO - CONST - DISTRIBUIDORES
  const [distribuidor, setDistribuidor] = useState("");
  const [ruc, setRuc] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [listModalOpen, setListModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const openList = () => {
    setListModalOpen(true);
  };

  const closeModal = () => {
    setListModalOpen(false);
    setModalOpen(false);
    setDistribuidor("");
    setRuc("");
  };

  const handleDistribuidores = (e) => {
    addDistribuidor(distribuidor, ruc);
    setDistribuidor("");
    setRuc("");
  };

  //  FIN - CONST - DISTRIBUIDORES
  return (
    <div className="container w-1/6">
      <div className="flex flex-col p-1 h-screen justify-center text-xl ">
        <h1 className="text-4xl font-semibold text-white pb-3 text-center">OPCIONES</h1>
        <div className="flex flex-col gap-5 font-bold border-t pt-5 border-blue-500">
          <button className="rounded-lg p-2 bg-blue-500 text-black focus:shadow-lg transition-all ease-in-out focus:shadow-blue-800">
            Buscar
          </button>
          <button
            className="rounded-lg p-2 bg-blue-500 text-black focus:shadow-lg transition-all ease-in-out focus:shadow-blue-800"
            onClick={() => openModal()}
          >
            Distribuidores
          </button>
          <button className="rounded-lg p-2 bg-blue-500 text-black focus:shadow-lg transition-all ease-in-out focus:shadow-blue-800">
            Listar
          </button>
          <button className="rounded-lg p-2 bg-blue-500 text-black focus:shadow-lg transition-all ease-in-out focus:shadow-blue-800">
            Exportar a Excel
          </button>
        </div>
      </div>
      <div>

        {/*MODAL INPUT DISTRIBUIDORES*/}
        <Modal isOpen={modalOpen} toggle={closeModal} className="">
          <div className="bg-[#1F1D2B] p-6 text-white ">
            <div className="mb-4">
              <div className="flex justify-between">
                <label className="block font-bold mb-2">DISTRIBUIDOR</label>
                <button
                  className="bg-white border rounded-full p-2 text-blue-500 text-xl"
                  onClick={() => openList()}
                >
                  <RiListOrdered />
                </button>
              </div>
              <input
                type="text"
                value={distribuidor}
                onChange={(e) => setDistribuidor(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ruc" className="block font-bold mb-2">
                RUC
              </label>
              <input
                type="text"
                value={ruc}
                onChange={(e) => setRuc(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 rounded bg-blue-500 font-semibold"
                onClick={handleDistribuidores}
              >
                Guardar cambios
              </button>
              <button
                className="px-4 py-2 ml-2 rounded bg-red-700 font-semibold"
                onClick={closeModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>

        {/*MODAL LIST DISTRIBUIDORES*/}
        <Modal
          className="min-w-fit min-h-fit"
          isOpen={listModalOpen}
          toggle={closeModal}
        >
          <div className="bg-[#1F1D2B] p-4 text-white text-center">
            <ModalHeader toggle={closeModal}>Listar Distribuidores</ModalHeader>
            <ModalBody>
              <table className="">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Distribuidor</th>
                    <th className="px-4 py-2">RUC</th>
                    <th className="px-4 py-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {distribuidores.map((distribuidorL) => (
                    <tr key={distribuidorL.id}>
                      <td className="px-4 py-2">{distribuidorL.distribuidor}</td>
                      <td className="px-4 py-2">{distribuidorL.ruc}</td>
                      <td className="flex px-4 py-1">
                        <Button
                          color="danger"
                          onClick={() => deleteDistribuidor(distribuidorL.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ModalBody>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export { FOptions };
