import { useContext, useState, userContext, Link, faUser, FontAwesomeIcon, Counter } from "../../../constants";

import "./index.scss";

export default function HeaderBar(props) {
  const { user, setUser } = useContext(userContext);

  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);

  return (
    <nav className="app-header">
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
