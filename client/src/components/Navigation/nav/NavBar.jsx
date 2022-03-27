import { useNavigate, FontAwesomeIcon, faLocationDot, faUtensils, faAppleWhole, LinkButton } from "../../../constants";
import "./index.scss";

export default function NavBar(props) {
  return (
    <nav className="footer">
      <LinkButton style={'icon-container'} link={'/locations'} icon={faLocationDot} />
      <LinkButton style={"icon-container"} link={'/foods'} icon={faAppleWhole} />
      <LinkButton style={"icon-container"} link={'/recipes'} icon={faUtensils} />
    </nav>
  );
}
