import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Sidebar = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Aulas",
    path: "/aulas",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];
