import { faLocationDot, faUtensils, faAppleWhole, LinkButton } from "../../../constants";
import "./index.scss";

export default function NavBar(props) {
  return (
    <nav className="footer">
      <LinkButton link={'/locations'} icon={faLocationDot} />
      <LinkButton link={'/foods'} icon={faAppleWhole} />
      <LinkButton link={'/recipes'} icon={faUtensils} />
    </nav>
  );
}
