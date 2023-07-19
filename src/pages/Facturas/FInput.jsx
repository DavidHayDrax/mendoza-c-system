import { useState } from "react";

const FInput = ({ addFactura, distribuidores }) => {
  const [distribuidor, setDistribuidor] = useState("");
  const [ruc, setRuc] = useState("");
  const [nrofactura, setNrofactura] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const handleDistribuidorChange = (e) => {
    const selectedDistribuidor = e.target.value;
    setDistribuidor(selectedDistribuidor);
    
    const selectedRuc = distribuidores.find(opcion => opcion.distribuidor === selectedDistribuidor)?.ruc || "";
    setRuc(selectedRuc);
  };

  const handleFactura = (e) => {
    e.preventDefault();
    addFactura(distribuidor, ruc, nrofactura, fecha, descripcion, precio);
    setNrofactura("");
    setFecha("");
    setDescripcion("");
    setPrecio("");
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex text-4xl font-semibold text-white justify-between pb-2 border-b border-blue-500">
        FACTURAS
      </div>
      <div className="m-3 p-3 bg-gradient-to-r from-blue-500 to-blue-900 text-xl font-semibold col-span-4">
        REGISTRAR FACTURA
      </div>
      <div className="bg-[#1F1D2B] m-3 p-5 col-span-4 font-semibold text-xl text-white">
        <form className="grid grid-cols-2 gap-5">
          <div>
            <label>DISTRIBUIDOR</label>
            <select
              className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              value={distribuidor}
              onChange={handleDistribuidorChange}
            >
              {distribuidores.map((opcion) => (
                <option key={opcion.distribuidor} value={opcion.distribuidor}>
                  {opcion.distribuidor}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>RUC</label>
            <input
              className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              type="text"
              readOnly
              value={ruc}
            />
          </div>
          <div>
            <label>N° DE FACTURA</label>
            <input
              className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              type="text"
              value={nrofactura}
              onChange={(e) => {
                setNrofactura(e.target.value);
              }}
            />
          </div>
          <div>
            <label>FECHA</label>
            <input
              className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              type="text"
              value={fecha}
              onChange={(e) => {
                setFecha(e.target.value);
              }}
            />
          </div>
          <div>
            <label>PRECIO</label>
            <input
              className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              type="text"
              value={precio}
              onChange={(e) => {
                setPrecio(e.target.value);
              }}
            />
          </div>
          <div>
            <label>DESCRIPCION</label>
            <input
              className="m-2 w-full bg-[#1F1D2B] border-b border-blue-500"
              type="text"
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
          </div>
          <button
            className="border bg-gradient-to-r from-blue-500 to-blue-900 text-black p-2 rounded-xl col-span-2"
            type="submit"
            onClick={handleFactura}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export { FInput };
