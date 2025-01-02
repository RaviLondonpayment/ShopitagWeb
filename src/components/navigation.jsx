import { useNavigate } from "react-router-dom";
import "../components/style/navigation.css";

export const Navigation = ({ paths }) => {
  const navigate = useNavigate();
  const handleNavigate = (path) => navigate(path);
  console.log(paths, "navigation");
  return (
    <div className="flex-row-j">
      <div className="flex-row">
        <h2 className="navbar-logo">
          Shopitag
          <sup>®</sup>
        </h2>
        {/* <span class="beta">beta</span> */}
      </div>
      {/* <div className="navigationDiv">
        <button
          className={`${
            paths.substring(1) ? "" : "buttonColor"
          } navigatorButton`}
          onClick={() => handleNavigate("/")}
        >
          Home
        </button>
        <button
          className={`${
            paths.substring(1) === "aboutus" ? "buttonColor" : ""
          } navigatorButton`}
          onClick={() => handleNavigate("/aboutus")}
        >
          About us
        </button>
        <button
          className={`${
            paths.substring(1) === "contactus" ? "buttonColor" : ""
          } navigatorButton`}
          onClick={() => handleNavigate("/contactus")}
        >
          Contact us
        </button>
      </div> */}
    </div>
  );
};
