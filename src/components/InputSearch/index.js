import React from "react";

import { InputGroup, Input } from "./styles";

function InputSearch(props) {
  const { data, setList } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const filteredData = data.filter((f) => {
      if (name) {
        return f[name].toLowerCase().includes(value.toLowerCase());
      }
      return f.toLowerCase().includes(value.toLowerCase());
    });
    setList(filteredData);
  };

  return (
    <InputGroup>
      <Input {...props} onChange={handleChange} />
    </InputGroup>
  );
}

export default InputSearch;
