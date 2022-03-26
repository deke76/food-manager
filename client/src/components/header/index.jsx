import { useContext, useState } from "react";
import useFetchServer from "../../hooks/useFetchServer";
import { userContext } from "../../providers/UserProvider";
import { locationContext } from "../../providers/LocationProvider";
import { Link } from "react-router-dom";

import {
  faUser,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";
import Counter from "../buttons/counter";

export default function HeaderBar(props) {
  const { user, setUser } = useContext(userContext);

  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);

  return (
    <nav className="header">
      <Link to="/">
        <div className="group title">
          <div className="app-logo">🍌</div>
          <div className="app-title">Pantryful</div>{" "}
        </div>
      </Link>
      <div className="group">
        <div className="profile-image" onClick={toggleProfileChanger}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        {showProfileChanger && (
          <Counter value={user} setValue={setUser} minValue={1} maxValue={20} />
        )}
      </div>
    </nav>
  );
}
