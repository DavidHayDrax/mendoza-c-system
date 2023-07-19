import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Header = (props) => {
  const fechaActual = new Date().toLocaleDateString();
  const { title } = props;
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300 font-bold">{title}</h1>
          <p className="text-gray-500">{fechaActual}</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Busqueda"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6 border-blue-500">
        <a href="/almacenHco" className="py-2 pr-4">
          Huanchaco
        </a>
        <a href="/almacenEsp" className="py-2 pr-4">
          Esperanza
        </a>
        <a href="/almacenCont1" className="py-2 pr-4">
          Container1
        </a>
        <a href="almacenCont2" className="py-2">
          Container2
        </a>
      </nav>
    </header>
  );
};

export default Header;
