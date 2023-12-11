import { useState } from "react";

export default function InputField({ name, label }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <label className="inputLabel" htmlFor="html">
        {label}
      </label>
      <input
        className="input"
        placeholder={name}
        value={input}
        onChange={handleChange}
      />
      <h2>{input}</h2>
    </>
  );
}
