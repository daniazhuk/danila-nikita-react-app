import React from "react";
import { ISelect } from "../../../types";
import './select.css'

const Select = ({ options, defaultValue, value, onChange }: ISelect) => {
  return (
    <select value={value} onChange={(event:any) => onChange(event.target.value)} className="sort-select">
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
