/* eslint-disable react/prop-types */

export default function InputField({ name, setName, label }) {
  return (
    <>
      <label className="inputLabel" htmlFor="html">
        {label}
      </label>
      <textarea
        className="input"
        placeholder={name}
        onChange={(event) => setName(event.target.value)}
      ></textarea>
    </>
  );
}
