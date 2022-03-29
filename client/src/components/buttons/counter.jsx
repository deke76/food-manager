import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Counter(props) {
  const { value, setValue, maxValue, minValue, onChange } = props;

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
    justifyContent: "space-between",
    width: "2.5em",
  };

  return (
    <div className="counter" style={styles}>
      <FontAwesomeIcon icon={faCaretLeft} onClick={decrement} />
      <div className="value">{value}</div>
      <FontAwesomeIcon icon={faCaretRight} onClick={increment} />
    </div>
  );
}
