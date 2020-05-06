import React, { useState, memo } from "react";

import { List } from "./styles";

function CardList({ data, render }) {
  const [items, setItems] = useState([]); // eslint-disable-line

  return <List>{data.map((item) => render(item))}</List>;
}

export default memo(CardList);
