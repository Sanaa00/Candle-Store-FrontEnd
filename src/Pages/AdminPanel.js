import React from "react";
import { RiTableAltLine } from "react-icons/ri";
import { AiOutlineForm } from "react-icons/ai";

import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineFeedback } from "react-icons/md";

function AdminPanel() {
  const { user } = useSelector((state) => state.user);
  const options = [
    // {
    //   id: 1,
    //   name: "Dashboard",
    //   url: "dashboard",
    //   icon: <RxDashboard className="w-6 h-6" />,
    // },
    {
      id: 2,
      name: "Add Product",
      url: "form",
      icon: <AiOutlineForm className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Orders",
      url: "table",
      icon: <RiTableAltLine className="w-6 h-6" />,
    },
    {
      id: 4,
      name: "Products",
      url: "ProductsForAdmin",
      icon: <MdOutlineFeedback className="w-6 h-6" />,
    },
  ];

  if (!user || user.role !== "admin") return <Navigate to="/" replace />;

  return (
    <div className="bg-gray-50 pt-16 w-full h-full flex  ">
      <div className="w-80 h-[650px] bg-gray-100  shadow ml-5 m-2 rounded-md text-gray-800 font-semibold">
        <div className="w-80 h-10 pt-5">
          {options.map((option) => {
            return (
              <NavLink
                key={option.id}
                to={`/adminPanel/${option.url}`}
                className={({ isActive }) =>
                  (isActive ? " text-greeen bg-greeen bg-opacity-10 " : "") +
                  "flex flex-row w-full h-12 p-1 hover:bg-greeen hover:bg-opacity-10 pl-10 hover:duration-500 duration-500  items-center"
                }>
                <div>{option.icon}</div>
                <p className="pl-2">{option.name}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="xl:ml-5 2xl:ml-10 mt-8 w-4/6">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPanel;
