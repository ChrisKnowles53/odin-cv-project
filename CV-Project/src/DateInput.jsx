/* eslint-disable react/prop-types */
import { useState } from "react";

export default function DateInputField({ label, graduationDate, setName }) {
  return (
    <>
      <label className="inputLabel" htmlFor="html">
        {label}
      </label>
      <input
        className="input"
        type="date"
        value={graduationDate}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <h2>{graduationDate}</h2>
    </>
  );
}
