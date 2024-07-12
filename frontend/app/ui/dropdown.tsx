"use client";
import { setLanguage } from "../lib/actions";

export function Dropdown() {
  const handleChange = (ev) => {
    setLanguage(ev.target.value);
  };

  return (
    <select id="standard-select" onChange={handleChange}>
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}
