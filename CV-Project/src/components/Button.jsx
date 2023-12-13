/* eslint-disable react/prop-types */
export default function Button({ text, handleSave }) {
  return (
    <button className="button" onClick={handleSave}>
      {text}
    </button>
  );
}
