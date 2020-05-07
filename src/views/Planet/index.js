import React, { useCallback, useEffect, useState } from "react";

import CardList from "../../components/CardList";
import Card from "../../components/Card";
import CardContent from "../../components/Card/CardContent";
import CardFooter from "../../components/Card/CardFooter";
import Empty from "../../components/Empty";
import InputSearch from "../../components/InputSearch";
import Loading from "../../components/Loading";

import Resident from "./Resident";

import { getListPlanet } from "./actions";

function Planet() {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [residents, setResidents] = useState({ name: "", list: [] });
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleGetPlanet = async () => {
    const data = await getListPlanet();
    setList(data);
    setFilterList(data);
  };

  const initialRender = useCallback(async () => {
    setIsFetching(true);
    await handleGetPlanet();
    setIsFetching(false);
  }, []); // eslint-disable-line

  useEffect(() => {
    initialRender();
  }, [initialRender]);

  const handleClick = (record) => {
    setResidents({ name: record.name, list: record.residents });
    setOpenDrawer(true);
  };

  const renderImage = (img) => {
    const isLocal = img.includes("../images");
    if (isLocal) {
      return `https://dragon-ball-api.herokuapp.com/${img.replace("../", "")}`;
    }
    return img;
  };

  return (
    <>
      <Loading show={isFetching} />

      <Resident
        visible={openDrawer}
        data={residents}
        onClose={() => setOpenDrawer(false)}
      />

      {filterList.length ? (
        <InputSearch
          placeholder="Pesquisar planeta"
          name="name"
          data={filterList}
          setList={setList}
        />
      ) : null}

      {list.length ? (
        <CardList
          data={list}
          render={(item) => (
            <Card
              type="ternary"
              key={item._id}
              onClick={() => handleClick(item)}
            >
              <CardContent img={renderImage(item.image)} />
              <CardFooter name={item.name} />
            </Card>
          )}
        />
      ) : (
        <Empty text="Ops... Nenhum planeta para mostrar" />
      )}
    </>
  );
}

export default Planet;
