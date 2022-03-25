import { Link } from "react-router-dom";
import "./selectOne.scss";

export default function SelectOneDropdown(props) {
  const {
    selected,
    setSelected,
    choices,
    onClickCallback,
    newChoiceText,
    newChoiceCallback,
    newChoiceLink,
  } = props;

  return (
    <ul>
      {choices.map((choice, index) => (
        <li
          key={index}
          onClick={() => {
            setSelected(index);
            onClickCallback && onClickCallback();
          }}
          className={index === selected ? "selected" : ""}
        >
          {choice}
        </li>
      ))}
      {newChoiceText && (
        <Link to={newChoiceLink}>
          <li
            className="new-choice"
            onClick={() => {
              newChoiceCallback && newChoiceCallback();
              onClickCallback && onClickCallback();
            }}
          >
            {newChoiceText}
          </li>
        </Link>
      )}
    </ul>
  );
}
