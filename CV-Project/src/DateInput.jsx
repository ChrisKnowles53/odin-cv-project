import { useState } from "react";

export default function DateInputField({ label }) {
  const [dateInput, setDateInput] = useState("");

  function handleChange(event) {
    setDateInput(event.target.value);
  }

  return (
    <>
      <label className="inputLabel" htmlFor="html">
        {label}
      </label>
      <input
        className="input"
        type="date"
        value={dateInput}
        onChange={handleChange}
      ></input>
      <h2>{dateInput}</h2>
    </>
  );
}
