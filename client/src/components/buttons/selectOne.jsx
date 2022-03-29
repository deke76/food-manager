import { Link } from "react-router-dom";
import "./selectOne.scss";

export default function SelectOneDropdown(props) {
  const {
    selected,
    setSelected,
    choices,
    onClickCallback,
    setterValue,
  } = props;

  return (
    <ul>
      {choices.map((choice, index) => (
        <li
          key={index}
          onClick={() => {
            console.log(choice)
            setterValue && setterValue(choice);
            setSelected && setSelected(index);
            onClickCallback && onClickCallback();
          }}
          className={index === selected ? "selected" : ""}
        >
          {choice}
        </li>
      ))}
    </ul>
  );
}
