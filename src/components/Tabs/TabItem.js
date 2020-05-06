import React, { useContext, useRef, useEffect, memo } from "react";
import { NavLink } from "react-router-dom";

import { TabsItem } from "./styles";
import TabsContext from "./TabsContext";

function TabItemComponent({ title, keyItem, link, current, onClick }) {
  const itemRef = useRef();
  const { registerItem } = useContext(TabsContext);

  useEffect(() => {
    if (itemRef.current) {
      registerItem(title, keyItem, link, current, onClick, itemRef.current);
    }
  }, [title, keyItem, link, current, onClick, registerItem]);

  return (
    <TabsItem key={keyItem} ref={itemRef} onClick={() => onClick}>
      <NavLink to={link} activeClassName="active">
        {title}
      </NavLink>
    </TabsItem>
  );
}

export default memo(TabItemComponent);
