import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
  RiUser3Fill,
} from "react-icons/ri";


import logo from "../../assets/logo.png";

const Sidebar = (props) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <img className="mb-5 pr-2" src={logo} />
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group">
            <a
              href="/almacenHco"
              className="group-hover:bg-[#276bac] p-2 flex justify-center rounded-xl text-[#276bac] group-hover:text-white transition-colors"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="/facturas"
              className="group-hover:bg-[#276bac] p-2 flex justify-center rounded-xl text-[#276bac] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="/checklist"
              className="group-hover:bg-[#276bac] p-2 flex justify-center rounded-xl text-[#276bac] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#276bac] p-2 flex justify-center rounded-xl text-[#276bac] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#276bac] p-2 flex justify-center rounded-xl text-[#276bac] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              onClick={() => loginWithRedirect()}
              className="group-hover:bg-[#276bac] p-2 flex justify-center rounded-xl text-[#276bac] group-hover:text-white transition-colors"
            >
              <RiUser3Fill className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              onClick={() => logout()}
              className="group-hover:bg-[#276bac] p-2 flex justify-center rounded-xl text-[#276bac] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
