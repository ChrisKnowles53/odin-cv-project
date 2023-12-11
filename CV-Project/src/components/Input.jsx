import { useState } from "react";

export default function InputField({ name }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <label className="inputLabel" htmlFor="html">
        {name}
      </label>
      <input
        className="input"
        label={name}
        placeholder={name}
        value={input}
        onChange={handleChange}
      />
      <h2>hi {input}</h2>
    </>
  );
}
