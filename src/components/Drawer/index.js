import React from "react";

import { Drawer } from "antd";
import "antd/lib/drawer/style/css";

function DrawerCustomComponent({ children, title, width, visible, onClose }) {
  return (
    <Drawer title={title} width={width} visible={visible} onClose={onClose}>
      {children}
    </Drawer>
  );
}

export default DrawerCustomComponent;
