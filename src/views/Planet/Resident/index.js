import React, { useCallback, useEffect, useState } from "react";

import shortid from "shortid";

import { Item } from "./styles";

import Drawer from "../../../components/Drawer";
import InputSearch from "../../../components/InputSearch";

function Resident({ visible, data, onClose }) {
  const [list, setList] = useState([]);

  const initialRender = useCallback(() => {
    setList(data.list);
  }, [data.list]); // eslint-disable-line

  useEffect(() => {
    initialRender();
  }, [initialRender]);

  return (
    <Drawer
      title={`Residentes do planeta ${data.name}`}
      width={350}
      visible={visible}
      onClose={onClose}
    >
      {data.list.length ? (
        <InputSearch
          placeholder="Pesquisar residente"
          width="100%"
          data={data.list}
          setList={setList}
        />
      ) : null}

      {list.length
        ? list.map((item) => <Item key={shortid.generate()}>{item}</Item>)
        : null}
    </Drawer>
  );
}

export default Resident;
