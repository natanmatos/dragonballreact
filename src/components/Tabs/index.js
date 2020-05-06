import React, { useState, useCallback } from "react";
import { Tabs } from "./styles";
import TabsContext from "./TabsContext";

function TabsComponent({ children }) {
  const [items, setItems] = useState([]); // eslint-disable-line

  const registerItem = useCallback(
    (title, keyItem, link, current, onClick, ref) => {
      setItems((prev) => [
        ...prev,
        { title, keyItem, link, current, onClick, ref },
      ]);
    },
    []
  );

  return (
    <Tabs>
      <TabsContext.Provider value={{ registerItem }}>
        {children}
      </TabsContext.Provider>
    </Tabs>
  );
}

export default TabsComponent;
