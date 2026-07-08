"use client";

import Navbar from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

function ResponsiveNavbar() {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler}  />
    </div>
  );
}

export default ResponsiveNavbar;
