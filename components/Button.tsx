type Props = {
  handleClick: () => void;
  handleDobleClick?: () => void;
  handleMouseEnter?: () => void;
  text: string;
};
export function Button({ handleClick, text, handleDobleClick, handleMouseEnter }) {
  return (
    <button
      className="button"
      onClick={handleClick}
      onDoubleClick={handleDobleClick}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </button>
  );
}
