import React, { useState } from "react";
// import ReactDOM from "react-dom";
import {
  Dropdown,
  MultiSelect,
  SelectItem,
  SelectPanel,
} from "react-multi-select-component";

import "./Checkboxstyle.css";

const Checkbox = () => {
  const options = [
    { label: "DC United", value: "dcunited" },
    { label: "Manchester United", value: "manchesterUnited" },
    { label: "LA Galaxy", value: "laGalaxy" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div className="checkbox">
      <MultiSelect
        options={options}
        value={selected}
        selected={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  );
};

export default Checkbox;
