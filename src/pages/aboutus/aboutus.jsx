import { useLocation } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import "./aboutus.css";

function Aboutus() {
  const location = useLocation();

  return (
    <div className="sectionOne">
      <Navigation paths={location.pathname} />
      <div>
        <h2>About Shopitag</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          scelerisque mi ac convallis dictum. Duis id dolor consequat, volutpat
          urna eget, faucibus justo. Donec fermentum dolor elit, eu interdum
          ipsum finibus quis. Sed ipsum orci, auctor eget augue nec, semper
          consectetur mauris. Quisque sed porta arcu. Donec non lacinia ante, at
          euismod urna. Fusce in lacus dapibus, blandit arcu a, bibendum lacus.{" "}
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
