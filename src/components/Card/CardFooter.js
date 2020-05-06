import React, { useContext, useRef, useEffect } from "react";

import CardContext from "./CardContext";
import { Footer, Text } from "./styles";

function CardContent({ name }) {
  const itemRef = useRef();
  const { registerItem } = useContext(CardContext);

  useEffect(() => {
    if (itemRef.current) {
      registerItem(name, itemRef.current);
    }
  }, [name, registerItem]);

  return (
    <Footer ref={itemRef}>
      <Text>{name}</Text>
    </Footer>
  );
}

export default CardContent;
