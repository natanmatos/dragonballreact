import React from "react";

import { StyledHeader, StyledBrand } from "./styles";

import Tabs from "../../components/Tabs";
import TabItem from "../../components/Tabs/TabItem";

function Header() {
  return (
    <StyledHeader>
      <StyledBrand>
        <span>Dragon</span>
        <span>Ball</span>
      </StyledBrand>

      <Tabs>
        <TabItem title="Personagens" link="/character" />
        <TabItem title="Planetas" link="/planet" />
      </Tabs>
    </StyledHeader>
  );
}

export default Header;
