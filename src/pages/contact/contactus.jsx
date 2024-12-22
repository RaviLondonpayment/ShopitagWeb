import { useLocation } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import "./contactus.css";

function ContactUs(params) {
  const location = useLocation();
  return (
    <div className="sectionOne">
      <Navigation paths={location.pathname} />
    </div>
  );
}

export default ContactUs;
