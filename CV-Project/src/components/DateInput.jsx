/* eslint-disable react/prop-types */

export default function DateInputField({ label, inputDate, setName }) {
  return (
    <>
      <label className="inputLabel" htmlFor="html">
        {label}
      </label>
      <input
        className="input"
        type="date"
        value={inputDate}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <h2>{inputDate}</h2>
    </>
  );
}
