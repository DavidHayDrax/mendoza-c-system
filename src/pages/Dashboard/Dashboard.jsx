import React from "react";
import { useState } from "react";
import Sidebar from "../../components/shared/Sidebar";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Sidebar showMenu={showMenu} />
      <div className="">
        <section className="bg-red-500 h-[100vh] ml-28">
          Herorrrrrrrrrrrrrrrrrrr
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
