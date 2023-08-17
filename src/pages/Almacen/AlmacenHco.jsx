import { useEffect, useState, useContext } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiPieChartLine,
  RiCloseLine,
} from "react-icons/ri";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

// Components
import Sidebar from "../../components/shared/Sidebar";
import { Opciones } from "./AlmacenComponents/Opciones";
import Header from "./AlmacenComponents/Header";
import { AList } from "./AlmacenComponents/AList";
import { AlmacenProvider, AlmacenContext  } from "./AlmacenContext";

function AlmacenHco() {
  const { setAlmacen,almacen } = useContext(AlmacenContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showOpciones, setShowOpciones] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOpciones(false);
  };

  const toggleOptions = () => {
    setShowOpciones(!showOpciones);
    setShowMenu(false);
  };

  const addMaterialesAlmacen = (
    nombreMaterial,
    descripcionMaterial,
    cantidadMaterial,
    imagenMaterial,
    imagenURLMaterial
  ) => {
    const lastId =
      almacen.materiales.length > 0
        ? almacen.materiales[almacen.materiales.length - 1].idMaterial
        : 1;
    const newMaterial = {
      idMaterial: "M" + (parseInt(lastId.slice(1)) + 1),
      nombreMaterial,
      descripcionMaterial,
      cantidadMaterial,
      imagenMaterial,
      imagenURLMaterial,
    };

    const updatedMateriales = [...almacen.materiales, newMaterial];

    setAlmacen((prevAlmacen) => ({
      ...prevAlmacen,
      materiales: updatedMateriales,
    }));

    setFilteredAlmacen(updatedMateriales); // Actualizar el estado de la lista filtrada
  };

  const addHerramientasAlmacen = (
    nombreHerramienta,
    descripcionHerramienta,
    cantidadHerramienta,
    operativaHerramienta,
    imagenHerramienta,
    imagenURLHerramienta
  ) => {
    const lastId =
      almacen.herramientas.length > 0
        ? almacen.herramientas[almacen.herramientas.length - 1].idHerramienta
        : 1;
    const newHerramienta = {
      idHerramienta: "H" + (parseInt(lastId.slice(1)) + 1),
      nombreHerramienta,
      descripcionHerramienta,
      cantidadHerramienta,
      operativaHerramienta,
      imagenHerramienta,
      imagenURLHerramienta,
    };

    const updatedHerramientas = [...almacen.herramientas, newHerramienta];

    setAlmacen((prevAlmacen) => ({
      ...prevAlmacen,
      herramientas: updatedHerramientas,
    }));

    setFilteredAlmacen(updatedHerramientas);
  };

  const addAccesoriosAlmacen = (
    nombreAccesorio,
    accesoriodeAccesorio,
    descripcionAccesorio,
    cantidadAccesorio,
    imagenAccesorio,
    imagenURLAccesorio
  ) => {
    const lastId =
      almacen.accesorios.length > 0
        ? almacen.accesorios[almacen.accesorios.length - 1].idAccesorio
        : 1;
    const newAccesorios = {
      idAccesorio: "H" + (parseInt(lastId.slice(1)) + 1),
      nombreAccesorio,
      accesoriodeAccesorio,
      descripcionAccesorio,
      cantidadAccesorio,
      imagenAccesorio,
      imagenURLAccesorio,
    };

    const updatedAccesorios = [...almacen.accesorios, newAccesorios];

    setAlmacen((prevAlmacen) => ({
      ...prevAlmacen,
      accesorios: updatedAccesorios,
    }));

    setFilteredAlmacen(updatedAccesorios);
  };

  const [activeFilter, setActiveFilter] = useState("materiales");
  const [filteredAlmacen, setFilteredAlmacen] = useState([]);

  useEffect(() => {
    if (activeFilter === "materiales") {
      setFilteredAlmacen(almacen.materiales);
    } else if (activeFilter === "herramientas") {
      setFilteredAlmacen(almacen.herramientas);
    } else if (activeFilter === "accesorios") {
      setFilteredAlmacen(almacen.accesorios);
    }
  }, [activeFilter, almacen]);

  //INSERT MATERIALES
  const [modalInsertMateriales, setModalInsertMateriales] = useState(false);
  const [nombreMaterial, setNombreMaterial] = useState("");
  const [descripcionMaterial, setDescripcionMaterial] = useState("");
  const [cantidadMaterial, setCantidadMaterial] = useState("");
  const [imagenMaterial, setImagenMaterial] = useState("");
  const [imagenURLMaterial, setImagenURLMaterial] = useState("");

  const closeModalInsertMateriales = () => {
    setModalInsertMateriales(false);
  };

  const handleMateriales = () => {
    addMaterialesAlmacen(
      nombreMaterial,
      descripcionMaterial,
      cantidadMaterial,
      imagenMaterial,
      imagenURLMaterial
    );
    setNombreMaterial("");
    setDescripcionMaterial("");
    setCantidadMaterial("");
    setImagenMaterial("");
    setImagenURLMaterial("");
  };

  //INSERT HERRAMIENTAS

  const [modalInsertHerramientas, setModalInsertHerramientas] = useState(false);
  const [nombreHerramienta, setNombreHerramienta] = useState("");
  const [descripcionHerramienta, setDescripcionHerramienta] = useState("");
  const [cantidadHerramienta, setCantidadHerramienta] = useState("");
  const [operativaHerramienta, setOperativaHerramienta] = useState(false);
  const [imagenHerramienta, setImagenHerramienta] = useState("");
  const [imagenURLHerramienta, setImagenURLHerramienta] = useState("");

  const closeModalInsertHerramientas = () => {
    setModalInsertHerramientas(false);
  };

  const handleHerramientas = () => {
    addHerramientasAlmacen(
      nombreHerramienta,
      descripcionHerramienta,
      cantidadHerramienta,
      operativaHerramienta,
      imagenHerramienta,
      imagenURLHerramienta
    );
    setNombreHerramienta("");
    setDescripcionHerramienta("");
    setCantidadHerramienta("");
    setImagenHerramienta("");
    setImagenURLHerramienta("");
  };

  // INSERT ACCESORIOS

  const [modalInsertAccesorios, setModalInsertAccesorios] = useState(false);
  const [nombreAccesorio, setNombreAccesorio] = useState("");
  const [descripcionAccesorio, setDescripcionAccesorio] = useState("");
  const [cantidadAccesorio, setCantidadAccesorio] = useState("");
  const [accesoriodeAccesorio, setAccesoriodeAccesorio] = useState("");
  const [imagenAccesorio, setImagenAccesorio] = useState("");
  const [imagenURLAccesorio, setImagenURLAccesorio] = useState("");

  const closeModalInsertAccesorios = () => {
    setModalInsertAccesorios(false);
  };

  const handleAccesorios = () => {
    addAccesoriosAlmacen(
      nombreAccesorio,
      accesoriodeAccesorio,
      descripcionAccesorio,
      cantidadAccesorio,
      imagenAccesorio,
      imagenURLAccesorio
    );
    setNombreAccesorio("");
    setDescripcionAccesorio("");
    setCantidadAccesorio("");
    setAccesoriodeAccesorio("");
    setImagenAccesorio("");
    setImagenURLAccesorio("");
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <AlmacenProvider>
        <Opciones
          showOpciones={showOpciones}
          setShowOpciones={setShowOpciones}
          setModalInsertMateriales={setModalInsertMateriales}
          setModalInsertHerramientas={setModalInsertHerramientas}
          setModalInsertAccesorios={setModalInsertAccesorios}
          activeFilter={activeFilter}
        />
        {/* Menu movil */}
        <nav
          className={`bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl ${
            showMenu ? "flex justify-items-end pl-36" : ""
          }`}
        >
          <button
            onClick={toggleMenu}
            className={`text-white p-2 ${showMenu ? "" : ""}`}
          >
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
          <button onClick={toggleOptions} className="p-2">
            <RiPieChartLine />
          </button>
        </nav>
        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className="md:p-8 p-4">
            {/* Header */}
            <Header title="ALMACEN HUANCHACO" />
            {/* Title content */}
            <div className="flex items-center justify-center lg:justify-end mb-16 max-sm:text-sm">
              <div className="flex items-center gap-2 py-2 rounded-lg">
                <button
                  className="hover:bg-[#276bac] text-white py-2 px-4 rounded-xl border border-gray-500"
                  onClick={() => setActiveFilter("materiales")}
                >
                  Materiales
                </button>
                <button
                  className="hover:bg-[#276bac] text-white py-2 px-4 rounded-xl border border-gray-500"
                  onClick={() => setActiveFilter("herramientas")}
                >
                  Herramientas
                </button>
                <button
                  className="hover:bg-[#276bac] text-white py-2 px-4 rounded-xl border border-gray-500"
                  onClick={() => setActiveFilter("accesorios")}
                >
                  Accesorios
                </button>
              </div>
            </div>
            <AList activeFilter={activeFilter} almacen={filteredAlmacen} />
          </div>
        </main>
      </AlmacenProvider>

      <Modal isOpen={modalInsertMateriales} toggle={closeModalInsertMateriales}>
        <div className="bg-[#1F1D2B] p-4 text-white ">
          <ModalHeader
            toggle={closeModalInsertMateriales}
            className="p-2 text-2xl "
          >
            MATERIALES
          </ModalHeader>
          <ModalBody className="grid grid-cols-2 gap-5">
            <div className="mb-4">
              <label htmlFor="distribuidor" className="block font-bold mb-1">
                NOMBRE :
              </label>
              <input
                type="text"
                value={nombreMaterial}
                onChange={(e) => setNombreMaterial(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ruc" className="block font-bold mb-1">
                DESCRIPCION :
              </label>
              <input
                type="text"
                value={descripcionMaterial}
                onChange={(e) => setDescripcionMaterial(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nrofactura" className="block font-bold mb-1">
                CANTIDAD :
              </label>
              <input
                type="text"
                value={cantidadMaterial}
                onChange={(e) => setCantidadMaterial(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fecha" className="block font-bold mb-1">
                IMAGEN :
              </label>
              <input
                type="text"
                value={imagenMaterial}
                onChange={(e) => setImagenMaterial(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="descripcion" className="block font-bold mb-1">
                IMAGENURL :
              </label>
              <input
                type="text"
                value={imagenURLMaterial}
                onChange={(e) => setImagenURLMaterial(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
          </ModalBody>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded bg-blue-500 font-semibold"
              onClick={handleMateriales}
            >
              Guardar cambios
            </button>
            <button
              className="px-4 py-2 ml-2 rounded bg-red-700 font-semibold"
              onClick={closeModalInsertMateriales}
            >
              Atras
            </button>
          </div>
        </div>
      </Modal>
      {/*MODAL INSERT HERRAMIENTAS*/}

      <Modal
        isOpen={modalInsertHerramientas}
        toggle={closeModalInsertHerramientas}
      >
        <div className="bg-[#1F1D2B] p-4 text-white ">
          <ModalHeader
            toggle={closeModalInsertHerramientas}
            className="p-2 text-2xl "
          >
            HERRAMIENTAS
          </ModalHeader>
          <ModalBody className="grid grid-cols-2 gap-5">
            <div className="mb-4">
              <label htmlFor="distribuidor" className="block font-bold mb-1">
                NOMBRE :
              </label>
              <input
                type="text"
                value={nombreHerramienta}
                onChange={(e) => setNombreHerramienta(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ruc" className="block font-bold mb-1">
                DESCRIPCION :
              </label>
              <input
                type="text"
                value={descripcionHerramienta}
                onChange={(e) => setDescripcionHerramienta(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">CANTIDAD :</label>
              <input
                type="text"
                value={cantidadHerramienta}
                onChange={(e) => setCantidadHerramienta(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4 flex">
              <label className="flex items-center font-bold mb-1">
                OPERATIVA:
              </label>
              <input
                type="checkbox"
                value={operativaHerramienta}
                onChange={(e) => setOperativaHerramienta(e.target.checked)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">IMAGEN :</label>
              <input
                type="text"
                value={imagenHerramienta}
                onChange={(e) => setImagenHerramienta(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">IMAGENURL :</label>
              <input
                type="text"
                value={imagenURLHerramienta}
                onChange={(e) => setImagenURLHerramienta(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
          </ModalBody>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded bg-blue-500 font-semibold"
              onClick={handleHerramientas}
            >
              Guardar cambios
            </button>
            <button
              className="px-4 py-2 ml-2 rounded bg-red-700 font-semibold"
              onClick={closeModalInsertHerramientas}
            >
              Atras
            </button>
          </div>
        </div>
      </Modal>

      {/*MODAL INSERT ACCESORIOS*/}

      <Modal isOpen={modalInsertAccesorios} toggle={closeModalInsertAccesorios}>
        <div className="bg-[#1F1D2B] p-4 text-white ">
          <ModalHeader
            toggle={closeModalInsertAccesorios}
            className="p-4 text-2xl "
          >
            ACCESORIOS
          </ModalHeader>
          <ModalBody className="grid grid-cols-2 gap-5">
            <div className="mb-4">
              <label className="block font-bold mb-1">NOMBRE :</label>
              <input
                type="text"
                value={nombreAccesorio}
                onChange={(e) => setNombreAccesorio(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">DESCRIPCION :</label>
              <input
                type="text"
                value={descripcionAccesorio}
                onChange={(e) => setDescripcionAccesorio(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">CANTIDAD :</label>
              <input
                type="text"
                value={cantidadAccesorio}
                onChange={(e) => setCantidadAccesorio(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">ACCESORIO DE :</label>
              <input
                type="text"
                value={accesoriodeAccesorio}
                onChange={(e) => setAccesoriodeAccesorio(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">IMAGEN :</label>
              <input
                type="text"
                value={imagenAccesorio}
                onChange={(e) => setImagenAccesorio(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">IMAGENURL :</label>
              <input
                type="text"
                value={imagenURLAccesorio}
                onChange={(e) => setImagenURLAccesorio(e.target.value)}
                className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              />
            </div>
          </ModalBody>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded bg-blue-500 font-semibold"
              onClick={handleAccesorios}
            >
              Guardar cambios
            </button>
            <button
              className="px-4 py-2 ml-2 rounded bg-red-700 font-semibold"
              onClick={closeModalInsertAccesorios}
            >
              Atras
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AlmacenHco;
