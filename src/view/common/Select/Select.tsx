import React from "react";
import { ISelect } from "../../../types";

const Select = ({ options, defaultValue, value, onChange }: ISelect) => {
  return (
    <select value={value} onChange={(event:any) => onChange(event.target.value)}>
      <option disabled value={""}>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
