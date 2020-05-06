import React, { useContext, useRef, useEffect, useState } from "react";

import CardContext from "./CardContext";
import { Content, Img } from "./styles";

import NoImage from "../../assets/images/no-image.jpg";

function CardContent({ img, name }) {
  const itemRef = useRef();
  const { registerItem } = useContext(CardContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (itemRef.current) {
      registerItem(img, name, itemRef.current);
    }
  }, [img, registerItem]);

  return (
    <Content ref={itemRef}>
      <Img
        src={error ? NoImage : img}
        alt={name}
        onError={() => setError(true)}
      />
    </Content>
  );
}

export default CardContent;
