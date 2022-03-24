import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Counter(props) {
  const { value, setValue, maxValue, minValue } = props;

  const increment = () =>
    setValue((prev) =>
      maxValue !== null && prev >= maxValue ? prev : prev + 1
    );

  const decrement = () =>
    setValue((prev) =>
      minValue !== null && prev <= minValue ? minValue : prev - 1
    );

  const styles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5em",
    width: "3em"
  }
  
  return (
    <div className="counter" style={styles}>
      <FontAwesomeIcon icon={faCaretLeft} onClick={decrement} />
      <div className="value">{value}</div>
      <FontAwesomeIcon icon={faCaretRight} onClick={increment} />
    </div>
  );
}
