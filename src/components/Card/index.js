import React, { useState, useCallback } from "react";

import { Card } from "./styles";
import CardContext from "./CardContext";

function CardComponent({ children, type, onClick }) {
  const [items, setItems] = useState([]); // eslint-disable-line

  const registerItem = useCallback((img, name, onClick, ref) => {
    setItems((prev) => [...prev, { img, name, onClick, ref }]);
  }, []);

  return (
    <Card type={type} onClick={onClick || null}>
      <CardContext.Provider value={{ registerItem }}>
        {children}
      </CardContext.Provider>
    </Card>
  );
}

export default CardComponent;
