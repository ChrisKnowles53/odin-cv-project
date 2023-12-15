/* eslint-disable react/prop-types */
export default function Button({ text, onClick, actionType }) {
  return (
    <button className="button" onClick={() => onClick(actionType)}>
      {text}
    </button>
  );
}
