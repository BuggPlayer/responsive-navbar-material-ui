import React, { useState } from "react";
import DrawerCompo from "../components/Drawer/DrawerCompo";
import ToolbarCompo from "../components/Toolbar/ToolbarCompo";

const NavHeader = () => {
  const [left, setleft] = useState(false);

  const toggleDrawer = () => {
    setleft(false);
  };

  const openDrawer = () => {
    setleft(true);
  };

  return (
    <div>
      <ToolbarCompo openDrawerHandler={openDrawer} />
      <DrawerCompo left={left} toggleDrawerHandler={toggleDrawer} />
    </div>
  );
};

export default NavHeader;
