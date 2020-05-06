import React, { useCallback, useEffect, useState } from "react";

import CardList from "../../components/CardList";
import Card from "../../components/Card";
import CardContent from "../../components/Card/CardContent";
import CardFooter from "../../components/Card/CardFooter";
import Empty from "../../components/Empty";
import InputSearch from "../../components/InputSearch";
import Loading from "../../components/Loading";

import { getListCharacter } from "./actions";

function CharacterComponent() {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleGetCharacter = async () => {
    const data = await getListCharacter();
    setList(data);
    setFilterList(data);
  };

  const initialRender = useCallback(async () => {
    setIsFetching(true);
    await handleGetCharacter();
    setIsFetching(false);
  }, []); // eslint-disable-line

  useEffect(() => {
    initialRender();
  }, [initialRender]);

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

      {list.length ? (
        <>
          <InputSearch
            placeholder="Pesquisar personagem"
            name="name"
            data={filterList}
            setList={setList}
          />
          <CardList
            data={list}
            render={(item) => (
              <Card type="primary" key={item._id}>
                <CardContent img={renderImage(item.image)} />
                <CardFooter name={item.name} />
              </Card>
            )}
          />
        </>
      ) : (
        <Empty text="Ops... Nenhum personagem para mostrar" />
      )}
    </>
  );
}

export default CharacterComponent;
