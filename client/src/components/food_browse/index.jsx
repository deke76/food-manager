import Calendar from "./../../calendar";
import Toggle from "../../toggle";
import useState from "react";

export default function FoodBrowse(props) {
  const [view, setView] = useState(0);

  return (
    <div>
      <Toggle
        options={["List", "Calendar"]}
        option={view}
        setOption={setView}
      />
      {view === 0 && <Calendar />}
    </div>
  );
}
