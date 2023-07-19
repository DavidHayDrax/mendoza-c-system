import React, { useContext, useState } from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import { AlmacenContext } from "./../AlmacenContext";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const Opciones = (props) => {
  const {
    showOpciones,
    setShowOpciones,
    setModalInsertMateriales,
    setModalInsertHerramientas,
    setModalInsertAccesorios,
    elemento,
  } = props;

  const [modalListRetiros, setModalInsertMaterial] = useState(false);
  const [retiros, setRetiros] = useState([]);
  const [retirosRegistrados, setRetirosRegistrados] = useState([]);

  const openList = () => {
    setModalInsertMaterial(true);
  };

  const closeModal = () => {
    setModalInsertMaterial(false);
  };

  const { elementosRetirar, eliminarElementoRetirar,limpiarElementos } =
    useContext(AlmacenContext);

  const handleRetiros = () => {
    const hechopor = "Kevin R.";

    const nuevosRetiros = retiros.map((retiro, index) => {
      const elemento = elementosRetirar[index];
      const nombreRetiro = elemento.nombre;
      const descripcionRetiro = retiro.descripcionRetiro;
      const cantidadRetiro = retiro.cantidadRetiro;

      return {
        idRetiro: retirosRegistrados.length + index + 1,
        nombreRetiro: elemento.nombre,
        descripcionRetiro,
        cantidadRetiro,
        hechopor,
      };
    });

    setRetirosRegistrados([...retirosRegistrados, ...nuevosRetiros]);
    setRetiros([]);
    limpiarElementos();
  };

  const handleDelete = (index) => {
    eliminarElementoRetirar(index);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRetiros = [...retiros];
    if (!updatedRetiros[index]) {
      updatedRetiros[index] = {};
    }
    updatedRetiros[index][field] = value;
    setRetiros(updatedRetiros);
  };

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOpciones ? "right-0" : "-right-full"
      }`}
    >
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-4 h-full">
        <RiCloseLine
          onClick={() => setShowOpciones(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-xl text-center border-b pb-2 border-blue-500 font-bold">
          OPCIONES
        </h1>
        <div className="flex flex-wrap gap-2 pt-3 pb-3 text-black justify-center">
          <button
            className="bg-blue-500 rounded-lg font-bold px-1"
            onClick={() => setModalInsertMateriales(true)}
          >
            Ingreso Materiales
          </button>
          <button
            className="bg-blue-500 rounded-lg font-bold px-1"
            onClick={() => setModalInsertHerramientas(true)}
          >
            Ingreso Herramientas
          </button>
          <button
            className="bg-blue-500 rounded-lg font-bold px-1"
            onClick={() => setModalInsertAccesorios(true)}
          >
            Ingreso Accesorios
          </button>
          <button
            className="bg-blue-500 rounded-lg font-bold px-3"
            onClick={() => setModalInsertMaterial(true)}
          >
            Historial de Retiro
          </button>
        </div>
        <div>
          <h1 className="text-xl text-center border-b pb-2 border-blue-500 font-bold">
            RETIRO
          </h1>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:justify-center md:gap-x-4 lg:grid-cols-1 overflow-y-auto max-h-[500px] md:max-h-[700px] lg:max-h-[600px] pt-3 overflow-x">
            {elementosRetirar.map((elemento, index) => (
              <div className="bg-[#262837] p-2 rounded-xl mb-2" key={index}>
                <div className="flex justify-between">
                  {/* Product description */}
                  <div className="flex items-center">
                    <img src={elemento.imagen} className="w-20" />
                    <div>
                      <input
                        className="text-xl p-1 text-start bg-[#262837] w-20"
                        placeholder={elemento.nombre}
                        value={retiros[index]?.nombreRetiro || ""}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "nombreRetiro",
                            e.target.value
                          )
                        }
                        readOnly
                      />
                    </div>
                  </div>
                  {/* Cantidad */}
                  <div className="flex justify-between mr-2">
                    <form className="flex items-center gap-3">
                      Qty
                      <input
                        type="text"
                        className="rounded-lg py-2 bg-[#1F1D2B] w-14 text-center"
                        placeholder={`0/${elemento.cantidad}`}
                        value={retiros[index]?.cantidadRetiro || ""}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "cantidadRetiro",
                            e.target.value
                          )
                        }
                      />
                    </form>
                  </div>
                </div>
                {/* Note */}
                <div className="flex justify-between">
                  <form className="">
                    <input
                      type="text"
                      className="bg-[#1F1D2B] py-2 rounded-lg outline-none px-4"
                      placeholder="Descripcion.."
                      value={retiros[index]?.descripcionRetiro || ""}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "descripcionRetiro",
                          e.target.value
                        )
                      }
                    />
                  </form>
                  {/* Delete */}
                  <div className="px-3">
                    <button
                      className="p-1 rounded-lg text-3xl"
                      onClick={() => handleDelete(index)}
                    >
                      <RiDeleteBin6Line className="text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Retiro hecho por:</span>
            <span>Kevin R.</span>
          </div>
          <div>
            <button
              className="bg-blue-500 w-full py-2 px-4 rounded-lg font-bold"
              onClick={handleRetiros}
            >
              REGISTRAR
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={modalListRetiros} toggle={closeModal} className="min-h-fit min-w-fit">
        <div className="bg-[#1F1D2B] text-white p-3 text-center">
          <ModalHeader toggle={closeModal} className="text-2xl">HISTORIAL DE RETIROS</ModalHeader>
          <ModalBody>
            <table className="">
              <thead>
                <tr className="grid grid-cols-11 text-blue-500">
                  <th className="col-span-3 ">NOMBRE</th>
                  <th className="col-span-4 ">DESCRIPCIÓN</th>
                  <th className="col-span-1 ">CANTIDAD</th>
                  <th className="col-span-2">HECHO POR</th>
                </tr>
              </thead>
              <tbody>
                {retirosRegistrados.map((retiro) => (
                  <tr className="grid grid-cols-11" key={retiro.idRetiro}>
                    <td className="col-span-3 text-justify">{retiro.nombreRetiro}</td>
                    <td className="col-span-4 text-justify">{retiro.descripcionRetiro}</td>
                    <td className="col-span-1 text-center">{retiro.cantidadRetiro}</td>
                    <td className="col-span-3">{retiro.hechopor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ModalBody>
        </div>
      </Modal>
    </div>
  );
};

export { Opciones };