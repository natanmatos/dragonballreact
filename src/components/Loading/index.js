import React from "react";

import { Loading, Img, Text } from "./styles";

import loading from "../../assets/images/loading.gif";

function LoadingComponent({ show, text }) {
  if (show) {
    return (
      <Loading>
        <Img src={loading} alt="loading" />
        {text ? <Text>{text}</Text> : null}
      </Loading>
    );
  }
  return null;
}

export default LoadingComponent;
