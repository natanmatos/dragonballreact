import React from "react";

import { Empty, Img, Text } from "./styles";

import image from "../../assets/images/empty.png";

function LoadingComponent({ text }) {
  return (
    <Empty>
      <Img src={image} alt="loading" />
      {text ? <Text>{text}</Text> : null}
    </Empty>
  );
}

export default LoadingComponent;
