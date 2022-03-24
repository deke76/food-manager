export default function SelectOneDropdown(props) {
  const { selected, setSelected, choices, newChoiceText, newChoiceCallback } =
    props;
  
  return (
    <ul>
      {choices.map((choice, index) => (
        <li
          key={index}
          onClick={() => setSelected(index)}
          className={index === selected ? "selected" : ""}
        >
          {choice}
        </li>
      ))}
      <li className="new-choice" onClick={newChoiceCallback}>
        {newChoiceText}
      </li>
    </ul>
  );
}
