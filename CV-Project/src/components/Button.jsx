/* eslint-disable react/prop-types */
export default function Button({ text, handleClick }) {
  return (
    <button
      className="button"
      onClick={() => handleClick("https://www.theodinproject.com")}
    >
      {text}
    </button>
  );
}
