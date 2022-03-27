// import { Link } from "../../constants";
import "./selectOne.scss";

export default function SelectOneDropdown(props) {
  const {
    selected,
    setSelected,
    choices,
    onClickCallback,
    newChoiceText,
    newChoiceCallback,
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
        <li
          className="new-choice"
          onClick={() => {
            newChoiceCallback && newChoiceCallback();
            onClickCallback && onClickCallback();
          }}
        >
          {newChoiceText}
        </li>
      )}
    </ul>
  );
}
