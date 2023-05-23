"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import logo from "@/assets/images/logo.png";
import IconoMenu from "./IconoMenu";
import { useState } from "react";

const Header = () => {
  const [Menu, setMenu] = useState(false);
  return (
    <header className="backdrop-blur-[2px]  ">
      <div className="h-20 flex justify-between items-center px-4 relative ">
        <Image src={logo} alt="fondo" />
        <IconoMenu setMenu={setMenu} Menu={Menu} />
      </div>
      <Navbar Menu={Menu} setMenu={setMenu} />
    </header>
  );
};
export default Header;
