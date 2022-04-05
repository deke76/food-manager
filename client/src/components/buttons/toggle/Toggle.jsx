// import modules
import classNames from "classnames";

// import style sheets
import "./Toggle.scss";

export default function Toggle(props) {
  const { options, option, setOption } = props;
  return (
    <div className="option-toggle">
      {options.map((opt, index) => {
        const classes = classNames("option", { selected: index === option });
        return (
          <div key={index} className={classes} onClick={() => setOption(index)}>
            {opt}
          </div>
        );
      })}
    </div>
  );
}
