import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUtensils,
  faAppleWhole,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import LinkButton from "../../buttons/link";

export default function NavBar(props) {
  return (
    <nav className="footer">
      <LinkButton style={'icon-container'} link={'/locations'} icon={faLocationDot} />
      <LinkButton style={"icon-container"} link={'/foods'} icon={faAppleWhole} />
      <LinkButton style={"icon-container"} link={'/recipes'} icon={faUtensils} />
    </nav>
  );
}
