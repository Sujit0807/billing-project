import React, { useState } from "react";
import Link from "next/link";

import { MainHeader } from "./MainHeader";
import { NavLinks } from "./NavLinks";
import Backdrop from "../UI/Backdrop";
import SideDrawer from "../UI/SideDrawer";

export const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen}>
          <nav className="h-full">
            <NavLinks />
          </nav>
        </SideDrawer>
      <MainHeader>
        <button
          className="w-8 h-12 flex flex-col justify-around cursor-pointer bg-transparent ml-5 md:hidden"
          onClick={openDrawerHandler}
        >
          <span className="text-2xl">
          ☰
          </span>
          
        </button>
        <h1 className="text-black text-xl ml-2 font-extrabold">
          <span className="hover:text-purple-900 flex items-center">
            <div className="h-10">
              <img src={"/pdf.png"} alt="icon" className="h-full" />
            </div>
          <Link href="/">INVOICE MAKER</Link>
          </span>
        </h1>
        <nav className="hidden md:block">
          <NavLinks desktop/>
        </nav>
      </MainHeader>
    </>
  );
};
