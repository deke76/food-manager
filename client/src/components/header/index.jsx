import { useContext, useState } from "react";
import { userContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";
import Button from "../buttons/actions/Button";

import "./index.scss";
import Counter from "../buttons/counter";

export default function HeaderBar(props) {
  const { user, setUser } = useContext(userContext);

  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);

  return (
    <nav className="app-header">
      <Link to="/">
        <span className="group title">
          <span className="app-logo">🍌</span>
          <span className="app-title">Pantryful</span>{" "}
        </span>
      </Link>
      <span className="group">
        <Button icon="profile" onClick={toggleProfileChanger} />
        {showProfileChanger && (
          <Counter value={user} setValue={setUser} minValue={1} maxValue={23} />
        )}
      </span>
    </nav>
  );
}
