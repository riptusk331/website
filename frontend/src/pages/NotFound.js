import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from "@fortawesome/free-solid-svg-icons"

export default function NotFound() {
  const location = useLocation();

  return (
    <div id="not-found">
      <h1>Uh Oh! <FontAwesomeIcon icon={faBomb} /></h1>
      <p>Sorry, that page doesn't exist.</p>
      <p>
        <i>{location.pathname} is not a valid route</i>
      </p>
    </div>
  );
}