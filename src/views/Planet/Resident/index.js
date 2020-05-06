import React from "react";

import Drawer from "../../../components/Drawer";
import shortid from "shortid";

import { Item } from "./styles";

function Resident({ visible, data, onClose }) {
  return (
    <Drawer
      title={`Residentes do planeta ${data.name}`}
      width={350}
      visible={visible}
      onClose={onClose}
    >
      {data.list.map((item) => (
        <Item key={shortid.generate()}>{item}</Item>
      ))}
    </Drawer>
  );
}

export default Resident;
